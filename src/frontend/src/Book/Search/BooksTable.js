import React, {  } from 'react';

function BooksTable({ books }) {
  return (
    <div className="container mt-3">
      <table className="table table-striped-rows">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Total Copies</th>
            <th scope="col">Copies In Use</th>
            <th scope="col">Type</th>
            <th scope="col">ISBN</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.firstName} {book.lastName}</td>
              <td>{book.totalCopies}</td>
              <td>{book.copiesInUse}</td>
              <td>{book.type}</td>
              <td>{book.isbn}</td>
              <td>{book.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;