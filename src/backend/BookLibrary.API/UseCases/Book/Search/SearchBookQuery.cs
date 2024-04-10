using System.Data;
using Dapper;
using MediatR;

namespace BookLibrary.API.UseCases.Book.Search;

public sealed record SearchBookQuery(BookSearchOption SearchBy, string Value) : IRequest<IReadOnlyCollection<Book>>;

public sealed class SearchBookCommandHandler(IDbConnection dbConnection)
    : IRequestHandler<SearchBookQuery, IReadOnlyCollection<Book>>
{
    public async Task<IReadOnlyCollection<Book>> Handle(SearchBookQuery request, CancellationToken cancellationToken)
    {
        var searchBy = request.SearchBy switch
        {
            BookSearchOption.Title => "[title]",
            BookSearchOption.Author => "(first_name + ' ' + last_name)",
            BookSearchOption.ISBN => "[isbn]",
            BookSearchOption.Type => "[type]",
            _ => null
        };

        if (searchBy is null) return new List<Book>(0);

        var sql = $"""
                   SELECT [book_id] Id
                         ,[title] Title
                         ,[first_name] FirstName
                         ,[last_name] LastName
                         ,[total_copies] TotalCopies
                         ,[copies_in_use] CopiesInUse
                         ,[type] Type
                         ,[isbn] ISBN
                         ,[category] Category
                     FROM [dbo].[books]
                     WHERE {searchBy} LIKE @Value
                   """;

        var result = await dbConnection.QueryAsync<Book>(sql, new
        {
            Value = $"%{request.Value}%"
        });
        return result.ToList();
    }
}