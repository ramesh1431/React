import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import 'core-js/es6/map';
import App from './component/App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>
    , document.getElementById('root'));