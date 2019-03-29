import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import Header from './header';
import Routes from './routes';
import Footer from './footer';

ReactDOM.render(

<HashRouter>
  <Header />
  <Routes />
  <Footer />
</HashRouter>, document.getElementById('root'));
