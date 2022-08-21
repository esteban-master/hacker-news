import React from 'react'

import './index.css'

import './App.css'
import LocalStorageProvider from './context/LocalStorageContext'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <main className="App">
      <div className="header">
        <div className="container">
          <h1>Hacker News</h1>
        </div>
      </div>
      <div className="container">
        <LocalStorageProvider>
          <Home />
        </LocalStorageProvider>
      </div>
    </main>
  )
}

export default App
