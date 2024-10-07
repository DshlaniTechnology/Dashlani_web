import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Logo from '../Images/BTLOGO.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <>
      <section className='bg-main py-5 overflow-hidden'>
        <Container>
          <Row className='gx-lg-5 gy-lg-0 gy-5'>
            <Col lg={5} md={6} sm={6} className='text-white'>
              <Image src={Logo} alt="logo" fluid width={120} className='mb-4 footer-logo' />
              <p className='text-white text-opacity-75'>
                Deshlani Technology is a forward-thinking IT services provider dedicated to delivering innovative digital solutions. With expertise across various technological domains, we help businesses enhance their digital presence and operational efficiency.
              </p>
              <Button className="btn-1 border-2 position-relative overflow-hidden rounded-pill fs-5 fw-bold">Join</Button>
            </Col>
            <Col lg={2} md={6} sm={6} className='text-white'>
              <h3 className="fw-medium fs-3 mb-4 footer-head position-relative">Learn More</h3>
              <ul className='m-0 p-0'>
                <li>
                  <a href='/home' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Home</span>
                  </a>
                </li>
                <li>
                  <a href='/services' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Services</span>
                  </a>
                </li>
                <li>
                  <a href='/product' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Product</span>
                  </a>
                </li>
                <li>
                  <a href='/about-us' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">About Us</span>
                  </a>
                </li>
                <li>
                  <a href='/contact-us' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Contact Us</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={6} sm={6} className='text-white'>
              <h3 className="fw-medium fs-3 mb-4 footer-head position-relative">Our Services</h3>
              <ul className='m-0 p-0'>
                <li>
                  <a href='/home' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Home</span>
                  </a>
                </li>
                <li>
                  <a href='/services' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Services</span>
                  </a>
                </li>
                <li>
                  <a href='/product' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Product</span>
                  </a>
                </li>
                <li>
                  <a href='/about-us' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">About Us</span>
                  </a>
                </li>
                <li>
                  <a href='/contact-us' className='custom-button link-offset-2 link-underline link-underline-opacity-0'>
                    <div className="icon_cont">
                      <span className="icon">🡪</span>
                    </div>
                    <span className="text_button">Contact Us</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6} className='text-white'>
              <h3 className="fw-medium fs-3 mb-4 footer-head position-relative ">Get In Touch</h3>
              <div className="d-flex position-relative align-items-center mb-3 pt-2">
                <div className='flex-shrink-0 me-3'><FaPhoneAlt className='fs-4' /></div>
                <div>
                  <h6 className='fw-medium mb-0 fs-13'>Contact No : </h6>
                  <p className='mb-0 text-white text-opacity-75'><span className='fw-bold'>+91</span> 12367 83459</p>
                </div>
              </div>
              <div className="d-flex position-relative align-items-center mb-3">
                <div className='flex-shrink-0 me-3'><MdEmail className='fs-4' /></div>
                <div>
                  <h6 className='fw-medium mb-0 fs-13 '>Email :</h6>
                  <p className='mb-0 text-white text-opacity-75'>becoder.info@gmail.com</p>
                </div>
              </div>
              <div className="d-flex position-relative align-items-center mb-3">
                <div className='flex-shrink-0 me-3'><FaLocationDot className='fs-4' /></div>
                <div>
                  <h6 className='fw-medium mb-0 fs-13 '>Location : </h6>
                  <p className='mb-0 text-white text-opacity-75'>unnamed road, Surat, Amroli - 394101, Gujarat, India</p>
                </div>
              </div>
            </Col>
          </Row> 
          <div className="text-center text-white position-relative z-0 pt-3 footer-end mt-5">
          © {getCurrentYear()} All Rights Reserved by <i className='fw-bold' style={{color: '#758ba5'}}>Dashlani Technology</i>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer
