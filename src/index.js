// import the React, react dom, and react-router-dom parts needed to run this file (and thus the whole app)
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import the component below this that is nested in this component
import App from './App'
// import the CSS needed for this file
import './index.css'

// Using BrowserRouter to route to the appropriate page, then rendering the App Component inside BrowserRouter
// and then putting all of this at the root element of our html file using getElementByID
ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, 
    document.getElementById('root')
    )