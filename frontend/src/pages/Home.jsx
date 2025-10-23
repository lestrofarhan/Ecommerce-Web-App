import React from 'react'
import Hero from "../components/Hero"
import Latestproduct from '../components/Latestproduct'
import Bestseller from '../components/Bestseller';
import Terms from '../components/Terms';
import Subscribe from '../components/Subscribe';
const home = () => {
  return (
    <>
      <Hero />
      <Latestproduct />
      <Bestseller />
      <Terms />
      <Subscribe />
      
    </>
  );
}

export default home
