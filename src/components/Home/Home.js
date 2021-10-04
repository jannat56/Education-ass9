import React from 'react';
import first from '/JhankerProject/education-website/src/images/first.jpg'
import second from '/JhankerProject/education-website/src/images/second.jpg'
import third from '/JhankerProject/education-website/src/images/unnamed.jpg'
import "./Home.css"



const Home = () => {
    return (
        <section className="container">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="row p-5 slide-bg-info d-flex align-items-center">
                      <div className="col-lg-7">
                      <h1>HTML pakage</h1>
                        <p className="color">Compele html course</p>
                        <h1>$600</h1>
                       <button className="btn btn-warning">Enroll Now</button>
                        </div>
                      <div className="col-lg-5">
                        <img src={first} className=""alt=""/>
                      </div>
                  </div>
                
              </div>
              <div className="carousel-item">
                <div className="row p-5 slide-bg-info d-flex align-items-center">
                    <div className="col-lg-7">
                    <h1>CSS pakage</h1>
                        <p className="color">Complete CSS course</p>
                        <h1>$1200</h1>
                       <button className="btn btn-warning">Enroll Now</button>
                      </div>
                    <div className="col-lg-5 image">
                    <img src={second} className=""alt=""/>
                    </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row p-5 slide-bg-info d-flex align-items-center">
                    <div className="col-lg-7">
                        <h1>JS pakage</h1>
                        <p className="color">Complete JS course</p>
                        <h1>$1800</h1>
                       <button className="btn btn-warning">Enroll Now</button>
                      </div>
                    <div className="col-lg-5">
                    <img src={third} className=""alt=""/>
                    </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </section>
    
    
    
    )
    
      
}
export default Home;


     