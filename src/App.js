import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBooks from './containers/AddBooks';
import SearcheBook from './containers/searcheBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <NavBar />
   

        <Routes>
          <Route exact path="/" element={<AddBooks />} />
          <Route path="/search" element={<SearcheBook />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>

      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
