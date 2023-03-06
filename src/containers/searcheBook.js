import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/reducers/reducerFetchBooks';


const SearchBooks = () => {

// set up dispatch
const dispatch = useDispatch();

// fetch data from our store
const state = useSelector(state => state.search)

const [title, setTitle] = useState('');


  
  const handleSubmit = e => {
    e.preventDefault();
   dispatch(fetchBooks(title));
   // vider le input
    setTitle('')
}

    // render the books
  const renderBooks = () => {
    
    // loading state
    if (state.isLoading) return <strong>Loading please wait...</strong>;
    
    // error state
    if (state.error) return <strong>Items not available at this time</strong>;
    
    // regular data workflow
    const newArrayBooks = state.fetchedBooks;
    return newArrayBooks.length > 0 ? newArrayBooks.map(book=>
        <li key={book.id} className='list-group-item list-group-item-light d-flex flex-sm-row flex-column justify-content-between align-items-center'>
        <div><span><b>Titre:</b> {book.volumeInfo.title}</span> <span className='ms-2'><b>Auteur:</b> {book.volumeInfo.authors}</span></div>
    </li>
     ) : <span className='text-center'> aucun Book </span> 

  };


    return (
        <main role='main'>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container text-center'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Indiquer le sujet du livre à rechercher sur Google API </p>

                    <form className='d-flex flex-sm-row flex-column justify-content-center' onSubmit={handleSubmit}>

                        <div className='form-group m-3'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Auteur'
                                required
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className='form-group m-3'>
                            <button
                                className='btn btn-outline-secondary ml-3'
                            >Rechercher</button>
                        </div>
                    </form>

                    <div className='container mt-4' style={{ minHeight: '200px' }}>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className='list-group'>
                                    { renderBooks() }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default SearchBooks;
