import React from 'react'
import Hero from './Hero';
import Products from './Products'
import Testimonials from './Testimonials';
import Chicago from './Chicago'
const Main = () => {
  return (
    <main className='main'>
      <Hero/>
      <Products/>
      <Testimonials/>
      <Chicago/>
    </main>
  )
}

export default Main