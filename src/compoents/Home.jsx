import React from 'react';

export default function Home() {
  return (
    <div className="container-fluid p-0"> {/* Full width without padding */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../assets/images/img_bg_1.jpg')} className="img-fluid w-100" alt="Sale 1" />
            <div className="carousel-caption d-none d-md-block">
              <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../assets/images/img_bg_2.jpg')} className="img-fluid w-100" alt="Sale 2" />
            <div className="carousel-caption d-none d-md-block">
              <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../assets/images/img_bg_3.jpg')} className="img-fluid w-100" alt="Sale 3" />
            <div className="carousel-caption d-none d-md-block">
              <h3><a href="#">Limited Time Offer! Shop Now</a></h3>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
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
  );
}
