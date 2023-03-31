import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      <footer class="text-center text-lg-start bg-white text-muted ">

        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom section1">

          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/"
              className="me-4 link-secondary" target="blank">
              <i class="fab fa-facebook-f" /></a>
            <a href="https://www.twitter.com"
              className="me-4 link-secondary" target="blank">
              <i class="fab fa-twitter" /></a>

            <a href="https://www.google.com/" target="blank" className="me-4 link-secondary">
              <i class="fab fa-google" /></a>

            <a href="https://www.instagram.com/" target="blank" className="me-4 link-secondary">
              <i class="fab fa-instagram" /></a>

            <a href="https://www.linkdin.com/" target="blank" className="me-4 link-secondary">
              <i class="fab fa-linkedin" /></a>

            <a href="https://www.github.com/" target="blank" className="me-4 link-secondary">
              <i class="fab fa-github" /></a>

          </div>

        </section>
      
        <section class="section2">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ffooter">

                <h6 class="text-uppercase fw-bold mb-4 ftext">
                  <i class="fas fa-gem me-3 text-secondary "></i>Family Mart
                </h6>
                <p>
                  Family mart is a leading platform that deal with all the items according
                  to your need.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4 ftext">
                  Products
                </h6>
                <p>
                  <Link to="/Men">Men</Link>
                </p>
                <p>
                  <Link to="/Women">Women</Link>
                </p>
                <p>
                  <Link to="/Grocery">Grocery</Link>
                </p>
                <p>
                  <Link to="/">Home</Link>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4 ftext">
                  Useful links
                </h6>
                <p>
                  <Link to="/Cart">Cart</Link>
                </p>
                <p>
                  <Link to="/Login">Login</Link>
                </p>
                <p>
                  <a href="#!" class="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Help</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4 ftext">Contact</h6>
                <p><i class="fas fa-home me-3 text-secondary"></i> Kumbha marg,Jaipur</p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  Rathorshivam30@gmail.com
                </p>
                <p><i class="fas fa-phone me-3 text-secondary"></i> + 91 234 567 88</p>
                <p><i class="fas fa-print me-3 text-secondary"></i> + 91 234 567 89</p>
              </div>

            </div>

          </div>
        </section>



        <div class="text-center p-4 ff" >
          © 2023 Copyright:
          <span className='ffspan'> Shivam Rathor</span>
        </div>

      </footer>

    </div>
  )
}

export default Footer;
