import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const nodeEnv = process.env.NODE_ENV || 'development';

const App = () => {
  

  return (
    <div className="App">
       <h1>Hello world!</h1>
       {nodeEnv}
    </div>
  )
}

export default App
