import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/header';
import Routes from './routes';
import Footer from './components/layout/footer';
import api from  './api';

ReactDOM.render(

<BrowserRouter>
  <Header />
  <Routes />
  <Footer />
</BrowserRouter>
,document.getElementById('root'));
