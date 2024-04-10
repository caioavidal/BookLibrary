import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BooksFilter from './Book/Search/BooksFilter';
import BooksTable from './Book/Search/BooksTable';

function App() {
    const [books, setBooks] = useState([]);

    return (
        <div className="App">
            <header>
                <h3>Royal Library</h3>
            </header>
            <section>
                <BooksFilter setBooks={setBooks} />
            </section>
            <section>
                <BooksTable books={books} />
            </section>
        </div>
    );
}

export default App;