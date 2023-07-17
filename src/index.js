import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css" 
import { trendingUrl,upcomingUrl } from './URLs'; 

import NavBar from './Components/NavBar/navBar';
import Banner from './Components/Banner/Banner';
import Poster from './Components/Posters/Poster';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Banner/>
    <Poster url={trendingUrl} title="Trending Movies Of The Week"/>
    <Poster url={upcomingUrl} title="Upcoming movies" isSmall/>
  </React.StrictMode>
);

