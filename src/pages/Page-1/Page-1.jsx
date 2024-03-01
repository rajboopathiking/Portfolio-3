import React from 'react'
import Hero from '../../components/Home/Hero';
import Footer from '../../components/Home/Footer';
import Contact from '../../components/Contact';
import Home from '../../components/Home/Home';
import Projects from '../../components/Home/Projects';
import Skills from '../../components/Home/Skills';
import FAQ from '../../components/Home/FAQ';
import '../../App.css'
import About from '../../components/About';

export default function Page1() {
  return (
    <div className='bg-base-200'>
      < Home />
      < Skills />
      < Projects />
      < About />
      < Contact />
      < FAQ />
      < Footer />
    </div>
  )
}
