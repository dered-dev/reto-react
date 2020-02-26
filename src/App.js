import React from 'react'
import './App.css'
import Header from './Components/Header'
import FeedSection from './Components/FeedSection'
import MixSection from './Components/MixSection'

import Footer from './Components/Footer/Footer'

function App () {
  return (
    <div className='app'>
      <Header />
      <FeedSection />
      <MixSection />
      <Footer />
    </div>

  )
}

export default App
