import React from "react";
import "./testimonial.css"; 

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <h1 className="testimonial-title">
          To enhance the growth of your<br/> website, it’s essential to expedite<br/> the release of new pages.
        </h1>
        <div className="testimonial-details">
          <div className="testimonial-avatars">
            <img src="1.jpg" alt="Person 1" className="avatar" />
            <img src="2.jpg" alt="Person 2" className="avatar" />
            <img src="3.jpg" alt="Person 3" className="avatar" />
            <img src="4.jpg" alt="Person 4" className="avatar" />
          </div>
          <div className="testimonial-divider">/</div>
          <div className="testimonial-quote">
            <p className="quote">
              We Received A Great Amount Of Work In<br/> Just 2 Weeks Timeline!
            </p>
            <p className="author">
              <strong>Daniel, Design Lead @Google</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
