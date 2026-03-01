import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import TrendingPage from './Components/Pages/TrendingPage'
import FullReviewPage from './Components/Pages/FullReviewPage'
import NotFoundPage from './Components/ui/NotFoundPage'
import AllMoviePage from './Components/Pages/AllMoviePage'
import TopRatedMoviesPage from './Components/Pages/TopRatedMoviesPage'
import Footer from './Components/Footer'
const App = () => {
 
  const heroRef = useRef(null);
  const trendingRef = useRef(null);
  const allMoviesRef = useRef(null);
  const topRatedRef = useRef(null);
  return (
    <div className='bg-black'>
      <Navbar sections={{ heroRef, trendingRef, allMoviesRef,topRatedRef }} />
      <div ref={heroRef}><Hero/></div>
     <div ref={trendingRef}> <TrendingPage/></div>
      <FullReviewPage/>
      <div ref={topRatedRef}><TopRatedMoviesPage/></div>
      <div ref={allMoviesRef}><AllMoviePage/></div>
      {/* <NotFoundPage/> */}
      <Footer/>
    </div>
  )
}

export default App