import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





  

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App/>,routing, document.getElementById('root'));


// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);
 

// ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
