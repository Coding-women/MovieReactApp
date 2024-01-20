import React, { useState } from 'react';
import './App.css'
// import Cards from "./components/cards/cards"
import Header from "./Components/header/Header"

import Home from "./Pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from './Components/movieList/Movielist';
import MovieDetail from './Pages/movieDetail/MovieDetail'

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<h1><Home/></h1>} />
                    <Route path="/movie/:id" element={<MovieDetail/>} />
                    <Route path="/movies/:type" element={<MovieList/>} />
                    <Route path="/*" element={<h1>Error Page</h1>} />
                </Routes> 
            </Router>
        </div>
    )
}

export default App;