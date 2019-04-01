import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from './header';
import Routes from './routes';
import Footer from './footer';

ReactDOM.render(

<BrowserRouter>
  <Header />
  <Routes />
  <Footer />
</BrowserRouter>
,document.getElementById('root'));
