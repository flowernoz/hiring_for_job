import React from 'react'
import Banner from '../../components/banner/Banner'
import Header from "../../components/header/Header"
import About from '../../components/about/About'
import InfoCard from '../../components/infoCard/InfoCard'
import Section from '../../components/section/Section'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import Crousel11 from '../../components/crousel11/Carousel11'
import Footer from '../../components/footer/Footer'
import Questions from '../../components/questions/Questions'

function Home() {
  return (
    <div className='home'>
      <Header />
      <About />
      <Crousel11 />
      <HomeCarousel />
      <Banner />
      <InfoCard />
      <Section />
      <Questions />
      {/* <Carousel/> */}
      <Footer />
    </div>
  )
}

export default Home;
