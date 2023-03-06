import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  isLoading: false,
  fetchedBooks: [],
  error: ''
}



const reducerFetchBooks = createSlice({
  name: 'fetchbook',
  initialState,
  reducers: {

    fetchBooksLoadin: (state) => {
      state.isLoading = true;
    },
    fetchBooksSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = false;
      state.fetchedBooks = payload;
    },
    fetchBooksError: (state) => {
      state.error = true;
    }
  },
})


const GOOGLE_API_KEY = 'AIzaSyBRtxA3m7gRN6MlCIfrf6slEGN4CVgHr84'

//https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20


export function fetchBooks(title) {
  return async (dispatch) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`)
      .then((response) => {
        const bookItemsArrays = response.data.items
        dispatch(fetchBooksSuccess(bookItemsArrays));
        console.log(bookItemsArrays)
      })
      .catch((er) => {
        dispatch(fetchBooksError());
      });
  };
}


export const { fetchBooksLoadin, fetchBooksSuccess, fetchBooksError } = reducerFetchBooks.actions
export const booksSelector = (state) => state.fetchbook;
export default reducerFetchBooks.reducer