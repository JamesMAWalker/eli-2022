// External lib
import React from 'react'

// Components
import { Hero } from '@/page-sections/home/01-hero/hero.jsx'
import { Intro } from '@/page-sections/home/02-intro/intro.jsx'
import { Offerings } from '@/page-sections/home/03-offerings/offerings'
import { Pillars } from '@/page-sections/home/04-pillars/pillars'
import { Testimonial } from '@/page-sections/home/05-testimonial/testimonial'
import { Contact } from '@/page-sections/home/07-contact/contact'
import { Scheduling } from '@/page-sections/home/06-scheduling/scheduling'




export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Offerings />
      <Pillars />
      <Testimonial />
      <Scheduling />
      <Contact />
    </>
  )
}
