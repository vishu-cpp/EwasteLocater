import React from 'react'
import Navbar from './Navbar'
import '../App.css';
import { AboutUS } from './AboutUS';

const Faq = () => {
  return (
    <div>
      <Navbar />
      <AboutUS />


      <div class="container text-center border border-dark rounded p-3 mb-5 ">
        <div class="row">
          <div class="col ">

            <div className='fs-2 m-4'>
              Learn from us about e-waste management
              and proper discompostion technique for future.
            </div>

          </div>
          <div class="col">
            <img src="https://img.freepik.com/free-vector/landscape-man-canoe-river_24877-76260.jpg?w=740&t=st=1695374684~exp=1695375284~hmac=e8f7ae75ef6c5361062098f5e34a1c35ea467d1343621ba5d01dd65de45f4a18" width="523px" height="523px" className='photo' alt="" />

          </div>
        </div>
      </div>

      <div class="container accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is E-waste ?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              E-waste is any electrical or electronic equipment that’s been discarded. This includes working and broken items that are thrown in the garbage or donated to a charity reseller like Goodwill. Often, if the item goes unsold in the store, it will be thrown away. E-waste is particularly dangerous due to toxic chemicals that naturally leach from the metals inside when buried.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Faq
