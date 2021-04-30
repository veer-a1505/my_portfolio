import React from 'react'
import './App.css'
import AboutMe from './components/AbouMe'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
