import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import TrendingPage from './Components/Pages/TrendingPage'
import FullReviewPage from './Components/Pages/FullReviewPage'
import NotFoundPage from './Components/ui/NotFoundPage'
import AllMoviePage from './Components/Pages/AllMoviePage'
import TopRatedMoviesPage from './Components/Pages/TopRatedMoviesPage'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <TrendingPage/>
      <FullReviewPage/>
      <TopRatedMoviesPage/>
      <AllMoviePage/>
      {/* <NotFoundPage/> */}
      <Footer/>
    </div>
  )
}

export default App