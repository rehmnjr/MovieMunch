import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import TrendingPage from './Components/Pages/TrendingPage'
import FullReviewPage from './Components/Pages/FullReviewPage'
import NotFoundPage from './Components/ui/NotFoundPage'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TrendingPage/>
      <FullReviewPage/>
      <NotFoundPage/>
    </div>
  )
}

export default App