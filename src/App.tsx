import React from 'react'

import './index.css'

import './App.css'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <main className="App">
      <h1>Hacker News</h1>
      <Home />
    </main>
  )
}

export default App
