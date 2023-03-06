import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addnewBook, removeBook, deletAllBooks } from '../redux/reducers/reducerAddBooks'

const AddBooks = () => {


    const initialState = {
        id:uuidv4(),
        title: '',
        author: ''
    }

    const [newData, setNewData] = useState(initialState);
    const newBooks = useSelector((state) => state.library.books )


    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addnewBook(newData))
        // vider le input
        setNewData(initialState)

    }
    
    return (
        <main role='main'>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container text-center'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>

                    <form className='d-flex flex-sm-row flex-column justify-content-center'>
                        <div className='form-group m-3'>
                            <input
                                value={newData.title}
                                type="text"
                                className='form-control'
                                placeholder='Titre'
                                required
                                onChange={e => setNewData({ ...newData, title: e.target.value })}
                            />
                        </div>
                        <div className='form-group m-3'>
                            <input
                                value={newData.author}
                                type="text"
                                className='form-control'
                                placeholder='Auteur'
                                required
                                onChange={e => setNewData({ ...newData, author: e.target.value })}
                            />
                        </div>
                        <div className='form-group m-3'>
                            <button 
                            className='btn btn-outline-secondary ml-3' onClick={handleSubmit}
                            >Ajouter un livre</button>
                        </div>
                    </form>

                    <div className='container mt-4' style={{ minHeight: '200px' }}>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className='list-group'>
                                {newBooks.length > 0 ? newBooks.map(book=>
                                       <li key={book.id} className='list-group-item list-group-item-light d-flex flex-sm-row flex-column justify-content-between align-items-center'>
                                       <div><span><b>Titre:</b> {book.title}</span> <span className='ms-2'><b>Auteur:</b> {book.author}</span></div>
                                       <div><button className='btn btn-danger m-1' onClick={e => dispatch(removeBook(book.id))}>Supprimer</button></div>
                                   </li>
                                    ) : <span className='text-center'> aucun Book </span> }
                                </ul>

                                { newBooks.length > 0 && (<div className='d-flex justify-content-center'>
    <button className='btn btn-danger mt-4 mb-5' onClick={e => dispatch(deletAllBooks(newData))}>Effacer tous les livres</button>
</div>) }
                                
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}


export default AddBooks;
