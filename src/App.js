import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';

function App() {
  return ( 
    <Router>
    <GlobalStyle />
    <Hero />
    <Products heading='Choose your Products' data= {productData} />
    <Feature />
    <Products heading='Sweet Treats for You'  data= {productDataTwo} />
    </Router>
  );
}

export default App;
