import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SignUp } from '../Components/SignUp.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <SignUp />
    </Router>

  </React.StrictMode>,
)
