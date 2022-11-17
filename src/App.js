import Home from './pages/home';
import Book from './pages/bookmark';
import {BrowserRouter,  Route,Routes } from 'react-router-dom'
import './app.css'
import { useState } from 'react';
function App() {
  const[bookmark,setbookmark]=useState([])
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home setbookmark={setbookmark} />}/>
    <Route exact path="/bookmark" element={<Book hotels={bookmark} />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
