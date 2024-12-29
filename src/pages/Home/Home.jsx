import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import MobileAppDisplay from '../../components/MobileAppDisplay/MobileAppDisplay'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <MobileAppDisplay />
      <Footer />
    </div>
  )
}

export default Home