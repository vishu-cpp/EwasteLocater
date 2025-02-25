import React from 'react'
import ".././App.css"
const Carausel = () => {
    return (
        <div className='container border border-dark'>
            <div id="carouselExampleCaptions" className="carousel slide slider ">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://namoewaste.com/wp-content/uploads/2022/12/Namo-Nov-2022-5.png" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>E-waste accounts for 70% of toxic waste</h5>
                                <p>Although e-waste only makes up 2% of the trash in U.S. landfills, it comprises 70% of the overall toxic waste.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/938045/pexels-photo-938045.jpeg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>A Change for Future</h5>
                                <p>80% E-waste is not properly managed</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://uccinfoblog.files.wordpress.com/2020/10/e-waste-banner-1.png" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>A Change for our future generations</h5>
                                <p>Learn how we can change society</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carausel
