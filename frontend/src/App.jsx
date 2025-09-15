import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import ReviewPage from './Components/Pages/ReviewPage'
import FullReviewPage from './Components/Pages/FullReviewPage'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ReviewPage/>
      <FullReviewPage/>
    </div>
  )
}

export default App