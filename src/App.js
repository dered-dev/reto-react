import React from 'react'
import './App.css'
import Header from './Components/Header'
import FeedSection from './Components/FeedSection'
import MixSection from './Components/MixSection'

function App () {
  return (
    <div className='app'>
      <Header />
      <FeedSection />
      <MixSection />
    </div>
  )
}

export default App
