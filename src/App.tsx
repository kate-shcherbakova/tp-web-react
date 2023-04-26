// TASK 1
// import * as React from 'react';
// import BeerList from './BeerList';
// import Beer from './Beer';
//
// const beers = ['Coreff', 'Corona', 'Mort Subite'];
//
// const App: React.FC = () => {
//     const beers = ['Coreff', 'Corona', 'Mort Subite'];
//     return (
//         <div>
//             <h1>My Favorite Beers</h1>
//             <BeerList beers={beers} renderBeer={(beerName, index) =>
//                 <Beer key={index} id={index} name={beerName}/>
//             }/>
//         </div>
//     );
// };
//
// export default App;

// TASK 2
// import * as React from 'react';
// import BeerForm from './BeerForm';
// import {useState} from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//
// const App: React.FC = () => {
//     const [beers, setBeers] = useState(['Coreff', 'Corona', 'Mort Subite']);
//
//     return (
//         <div>
//             <h1>My Favorite Beers</h1>
//             <BeerForm beers={beers} setBeers={setBeers} />
//         </div>
//     );
// };
//
// export default App;


import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import BeerForm from './BeerForm';
import About from './About';

const App: React.FC = () => {
    const [beers, setBeers] = React.useState(['Coreff', 'Corona', 'Mort Subite']);

    return (
        <BrowserRouter>
            <div className="container mt-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h2 className="text-center mt-3 mb-3">TP React. Beers</h2>
                                <BeerForm beers={beers} setBeers={setBeers}/>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );

};

export default App;
