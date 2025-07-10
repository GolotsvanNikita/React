import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {ProductDetails} from "./components/ProductDetails";
import { CategoryPage } from './pages/CategoryPage';
import {NewsDetails} from "./components/NewsDetails.jsx";

function App()
{

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path='/news/:id' element={<NewsDetails />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
