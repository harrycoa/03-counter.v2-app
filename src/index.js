
import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp value= { 7 } />, divRoot);





// React +18
/*
import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#app');
const root = createRoot(divRoot);
root.render(<CounterApp value= { 10 } />);

*/