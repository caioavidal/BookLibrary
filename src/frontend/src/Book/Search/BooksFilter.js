
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function BooksFilter({ setBooks }) {
    const [searchBy, setSearchBy] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`/books?searchBy=${searchBy}&value=${searchValue}`);
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Filter Panel
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSearch}>
                                <div className="mb-3">
                                    <label htmlFor="searchBy" className="form-label">Search By</label>
                                    <select className="form-select" id="searchBy" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                                        <option value="0">Choose...</option>
                                        <option value="1">Title</option>
                                        <option value="2">Author</option>
                                        <option value="3">ISBN</option>
                                        <option value="4">Type</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="searchValue" className="form-label">Search Value</label>
                                    <input type="text" className="form-control" id="searchValue" placeholder="Enter search value" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksFilter;