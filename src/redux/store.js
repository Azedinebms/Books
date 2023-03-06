import { configureStore } from '@reduxjs/toolkit'
import reducerAddBooks from './reducers/reducerAddBooks'
import reducerFetchBooks from './reducers/reducerFetchBooks';



const store = configureStore({
    reducer: {
        library: reducerAddBooks,
        search: reducerFetchBooks
    },
  })

export default store;