import React from 'react'
import Navbar from './Navbar'

import Items from './Items'

const Ewaste = () => {
  return (
    <div className='container'>
        <Navbar/>
        <div className='container text-center' >
            <img src="https://cdn.jobs.makesense.org/projects/1284/project/1680793670524lg595ke5.png" style={{width:"70vw", height:"60vh"}} alt="img"/>
        </div>
        <Items/>
        
      
    </div>
  )
}

export default Ewaste
