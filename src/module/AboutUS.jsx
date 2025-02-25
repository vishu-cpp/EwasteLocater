import React from 'react'

export const AboutUS = () => {
  return (
    <div className='container'><h1 className='text-center p-2 m-2'>About us</h1>
        <div class="container text-center border border-success rounded p-3 mb-5"><p className='fs-2'>Who we Are?</p>
                <div class="row">
                    <div class="col fs-2 font-weight-bold">
                       
                        <div className='fs-6 m-4'>
                        We specialize in responsible e-waste management, recycling, and upcycling solutions. Our comprehensive services cover the entire spectrum of electronic waste, from old smartphones and laptops to outdated appliances and industrial machinery. We are committed to reducing the harmful environmental impacts of e-waste by diverting it from landfills and incineration facilities.
                        </div>
                        <div class="col">
                        <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1729005158~exp=1729005758~hmac=3415930afed4e4ef3b0a881a6c591121e97457b0db1458df2cfe3eaffd4c5e3d" class="img-thumbnail"  alt="/" />
                    </div>
                    </div>
                    
                </div>
                <div className='m-5'>
                    <div className='fs-3 p-3'>What we are solving?</div>
                    <ul >
                        <p>In India 95% generated ewaste is recycled by informal sector illegally which pollutes the environment and has a harmful effect on health conditions of workers doing it.</p>
                        <p>E waste recyclers works on less capacity they have for recycling because of supply chain issues between informal sector which collects the maximum part of e waste in india</p>
                        <p>We are trying to bridge the gap between supply chain of e waste between formal sector and informal sector.</p>
                    </ul>
                </div>
                <div className='m-5'>
                    <img src='https://www.nrc.no/image/88999/nrc_what-we-offer_poster.jpg?width=1200&height=497' height='400px' alt="."/>
                    <div className='fs-3 p-3'>What we are providing?</div>
                    <ul >
                        <p>A marketplace for govt authorized e-waste recycler to procure the waste easily and at best prices</p>
                        <p>Helping Corporates/manufacturers to meet their EPR target and dispose off their e waste legally and with environment-friendly ways.</p>
                        <p>Giving platform to small waste collectors to sell their e wsate at best rates which will help us to provide these waste to authorized recyclers and not to informal recyclers .</p>
                    </ul>
                </div>
            </div>
</div>

  )
}
