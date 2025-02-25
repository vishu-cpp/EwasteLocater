import React from 'react'
//import Grid from '@mui/joy/Grid';
import Navbar from './Navbar';
import Carausel from './Carausel';
//import EwasteMap from './EwasteMap';

import Map from './Map';
import { AboutUS } from './AboutUS';
import Bulkwaste from './Bulkwaste';
import Data from './Data';
import Footer from './Footer';
import Contact from './Contact';




export const Main = () => {
  return (
    <div>
        <Navbar/>
        <Carausel/>
        <Bulkwaste/>
        <AboutUS/>
        <Data/>
        <Map/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main
