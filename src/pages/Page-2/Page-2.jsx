import React from 'react'
import Hero2 from '../Page-1/Hero2'
import Footer from '../../components/Home/Footer'
import Submission from './Submission'
import Code from './Code'
import Page2Home from '../Page-1/Home2';
import Skills from '../../components/Home/Skills'

export default function Page2() {
  return (
    <div>
        <div>
            < Page2Home />
            < Hero2 />
            < Code />
            < Skills />
            < Submission />
            < Footer />
        </div>
    </div>
  )
}

