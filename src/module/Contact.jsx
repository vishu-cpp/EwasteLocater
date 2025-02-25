import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
            <div class="container text-center border border-dark rounded p-3 mb-5">
                <div class="row">
                    <div class="col fs- font-weight-bold">
                        Contact for Free consultation
                        <div className='fs-5 m-4'>
                            Monitor your EPR Fulfillment process with complete traceability.
                            Trust the one-stop solution from EPR Registration to Fulfillment.
                        </div>


                        <div>
                            <Link to='/e-waste'><button type="button" class="btn btn-dark m-2">Know more</button></Link>
                        </div>
                    </div>
                    
                    <div class="col">

                        <form className='container'>
                        <div className="row">
                            <div className="col-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Company name</label>
                                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>       
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Mobile no.</label>
                                    <input type="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>

                            </div>
                        </div>
                        
                            
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox center" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Subscribe to our newsletter</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
