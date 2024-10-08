import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import Logo from '../Images/BTLOGO.png';
import gsap from 'gsap';

function HeroHome() {

  useEffect(() => {
    const Navbar = gsap.timeline()


    return () => {
      Navbar.kill();
    };
  }, [])

  return (
    <>
      {/* Herohome section one start */}
      <section id='Home' className='py-80'>
        <Container >
          <Row className='gy-md-4 my-0 my-sm-4 pt-lg-0 pt-5 align-items-center'>
            <Col lg={6} md={12} className='hero-home-main'>
              <h6 className='fs-5 fw-bold mb-2 text-b'>IT SERVICES PROVIDER</h6>
              <h4 className='font-monospace fs-5 mb-2'>“सब सुख लहै तुम्हारी सरना, तुम रक्षक काहू को डरना”</h4>
              <p className='lh-base fw-normal text-b opacity-75'>
                BecoderTechnology is a premier IT services provider dedicated to delivering cutting-edge
                solutions across a wide spectrum of digital needs. Choose BecoderTechnology for unparalleled
                service and exceptional results in the digital landscape.
              </p>
            </Col>
            <Col lg={6} md={12} className='d-flex hero-home-video justify-content-center'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='img-fluid w-100 h-50'
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* <Image src={HeroImage} alt="image" className='img-fluid' /> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/* Herohome section one end */}

      {/* Herohome section two start */}
      <section className='brand-slider w-100 overflow-hidden pb-5'>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          freeMode={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
          <SwiperSlide className='p-3 text-center slider-logo pe-auto'>
            <Image src={Logo} alt="image" fluid className='w-75' />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default HeroHome;
