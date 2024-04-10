using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BookLibrary.API.UseCases.Book.Search;

[ApiController]
[Route("books")]
public class BooksSearchEndpoint(ISender mediator) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] BookSearchOption searchBy, string value)
    {
        var result = await mediator.Send(new SearchBookQuery(searchBy, value));
        return Ok(result);
    }
}