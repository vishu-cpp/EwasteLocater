import React from 'react'
import { Link } from 'react-router-dom'

const Bulkwaste = () => {
    return (
        <div className='container'><h1 className='p-3 text-center m-3'>Our services</h1>
            <div class="container text-center border border-dark rounded p-3 mb-5">
                <div class="row">
                    <div class="col fs-2 font-weight-bold">
                        Fulfill your EPR Targets with Ease
                        <div className='fs-5 m-4'>
                            Monitor your EPR Fulfillment process with complete traceability.
                            Trust the one-stop solution from EPR Registration to Fulfillment.
                        </div>
                        <div>
                            <a class="btn btn-dark" href="https://forms.gle/XoZU2zRddyzqSCFM8" role="button">Schedule Call</a>
                        </div>
                        
                        <div> 
                        <Link to='/e-waste'><button type="button" class="btn btn-dark m-2">Know more</button></Link>
                        </div>
                    </div>
                    <div class="col">
                        <img src="https://greentekreman.com/wp-content/uploads/2022/06/Who-Extended-Producer-Responsibility-Applies-to.jpg" class="img-thumbnail" alt="EPR" />
                    </div>
                </div>
            </div>


            <div class="container text-center border border-dark rounded p-3 mb-5 ">
                <div class="row">
                    <div class="col fs-2 font-weight-bold">
                        Marketplace for Authorized Recyclers
                        <div className='fs-5 m-4'>
                            Get best e waste raw material segregated and separated by experts for your needs.
                        </div>
                        <div>
                            <a class="btn btn-dark" href="https://forms.gle/XoZU2zRddyzqSCFM8" role="button">Schedule Call</a>
                        </div>

                        <div> 
                        <Link to='/e-waste'><button type="button" class="btn btn-dark m-2">Explore Marketplace</button></Link>
                        </div>
                    </div>
                    <div class="col">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7sdgU-JJQ_1SOM_rBVM6LtrVOO7WcMruaE5d6ALsdQfwPDseMBcUgzchTyaKCKeN3zs&usqp=CAU" class="img-thumbnail" width='300px' alt="EPR" />
                    </div>
                </div>
            </div>


            <div class="container text-center border border-dark rounded p-3 mb-5 ">
                <div class="row">
                    <div class="col fs-2 font-weight-bold">
                        For Bulk Sellers/Corporates
                        <div className='fs-5 m-3'>
                            <ul className='list-unstyled'>
                                <li>
                                 Get best price for your e waste than market.  
                                </li>
                                <li>
                                    Instant payment
                                </li>
                                <li>
                                    Door step service
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a class="btn btn-dark" href="https://forms.gle/XoZU2zRddyzqSCFM8" role="button">Schedule Call</a>
                        </div>

                        <div> 
                        <Link to='/e-waste'><button type="button" class="btn btn-dark m-2">Know more</button></Link>
                        </div>
                    </div>
                    <div class="col">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/XS/EO/UE/30011918/recycle-waste-250x250.jpg" width='300px' alt="EPR" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bulkwaste
