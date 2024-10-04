import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; // Import Navigation module
import { FaStar } from 'react-icons/fa';
import { Col, Container, Image, Row } from 'react-bootstrap';
import cardImg5 from '../Images/out-teme-4.jpg';

const AutoPlaySwiper = () => {
  const contentRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      setImageHeight(contentHeight * 1.4); // Adding 10% to the height
    }
  }, []);

  return (
    <Container className='py-80'>
      <Row>
        <Col lg={4} md={12} className='d-flex justify-content-center align-items-center'>
          <div className='pe-2'>
            <h3 className='text-capitalize mb-5 text-b fw-bold' style={{ fontSize: "3rem" }}>
              What's our <span style={{ color: "rgb(0 127 255)" }}>clients</span> are saying
            </h3>
            <p className='fs-5 fw-midium text-black text-opacity-75'>
              Our clients are at the heart of everything we do. Here’s what they have to say about their experiences with us...
            </p>
          </div>
        </Col>
        <Col lg={8} md={12}>
          <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={30}
            loop={true} // Loop the slides infinitely
            speed={3000}
            freeMode={false}
            freeModeMomentum={false}
            modules={[Autoplay, Navigation]} // Include Navigation module
            navigation // Enable navigation
          >
            <SwiperSlide>
              <div className='position-relative d-flex align-items-center' style={{ minHeight: '360px' }}>
                <div
                  ref={contentRef}
                  className='w-100 rounded-5 d-flex align-items-center pe-2'
                  style={{ backgroundColor: "#053c73", paddingLeft: "330px" }}
                >
                  <div className='p-4'>
                    <h4 className='fs-4' style={{ color: "#ecf4ff" }}>Jay Viradiya</h4>
                    <h6 className='fs-6 mb-4 text-white'>Co-founder of prodeals</h6>
                    <p className='fs-6 fw-normal mb-3 text-white text-opacity-50'>
                      Working with was a pleasure from start to finish. They listened to our needs and delivered exactly what we wanted.
                    </p>
                    <ul className='d-flex p-0 m-0 fs-6'>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                    </ul>
                  </div>
                </div>

                <div
                  className='position-absolute rounded-5 overflow-hidden'
                  style={{ height: `${imageHeight}px`, width: "300px", left: "30px" }}
                >
                  <Image src={cardImg5} alt='clients' className='img-fluid' />
                </div>
              </div>
            </SwiperSlide>

            {/* Repeat for other SwiperSlides... */}
            
            <SwiperSlide>
              <div className='position-relative d-flex align-items-center' style={{ minHeight: '360px' }}>
                <div
                  ref={contentRef}
                  className='w-100 rounded-5 d-flex align-items-center pe-2'
                  style={{ backgroundColor: "#053c73", paddingLeft: "330px" }}
                >
                  <div className='p-4'>
                    <h4 className='fs-4' style={{ color: "#ecf4ff" }}>Jay Viradiya</h4>
                    <h6 className='fs-6 mb-4'>Co-founder of prodeals</h6>
                    <p className='fs-6 fw-normal mb-3 text-white text-opacity-50'>
                      Working with was a pleasure from start to finish. They listened to our needs and delivered exactly what we wanted.
                    </p>
                    <ul className='d-flex p-0 m-0 fs-6'>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                    </ul>
                  </div>
                </div>

                <div
                  className='position-absolute rounded-5 overflow-hidden'
                  style={{ height: `${imageHeight}px`, width: "300px", left: "30px" }}
                >
                  <Image src={cardImg5} alt='clients' className='img-fluid' />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='position-relative d-flex align-items-center' style={{ minHeight: '360px' }}>
                <div
                  ref={contentRef}
                  className='w-100 rounded-5 d-flex align-items-center pe-2'
                  style={{ backgroundColor: "#053c73", paddingLeft: "330px" }}
                >
                  <div className='p-4'>
                    <h4 className='fs-4' style={{ color: "#ecf4ff" }}>Jay Viradiya</h4>
                    <h6 className='fs-6 mb-4'>Co-founder of prodeals</h6>
                    <p className='fs-6 fw-normal mb-3 text-white text-opacity-50'>
                      Working with was a pleasure from start to finish. They listened to our needs and delivered exactly what we wanted.
                    </p>
                    <ul className='d-flex p-0 m-0 fs-6'>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                      <li><FaStar style={{ color: "yellow" }} /></li>
                    </ul>
                  </div>
                </div>

                <div
                  className='position-absolute rounded-5 overflow-hidden'
                  style={{ height: `${imageHeight}px`, width: "300px", left: "30px" }}
                >
                  <Image src={cardImg5} alt='clients' className='img-fluid' />
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default AutoPlaySwiper;
