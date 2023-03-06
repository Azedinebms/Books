import { createSlice } from '@reduxjs/toolkit'


const reducerAddBooks = createSlice({
  name: 'addnbook',
  initialState: {books: []}, 
  reducers: {
    
    addnewBook: (state, action) => {
        state.books = [...state.books, action.payload]
        localStorage.setItem('booksData', JSON.stringify(state.books))
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(books => books.id !== action.payload)
      localStorage.setItem('booksData', JSON.stringify(state.books))
    },
    deletAllBooks: (state) => {
      state.books = []
      localStorage.setItem('booksData', JSON.stringify(state.books))
    }
  },
})



export const { addnewBook, removeBook, deletAllBooks } = reducerAddBooks.actions
export default reducerAddBooks.reducer