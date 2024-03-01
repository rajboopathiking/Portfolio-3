import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home/Home';
import Notfound from './components/Notfound';
import Page1 from './pages/Page-1/Page-1';

import Page2 from './pages/Page-2/Page-2';
import Page3 from './pages/Page-3/Page3';
import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Page1 />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/page3' element={<Page3 />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}


