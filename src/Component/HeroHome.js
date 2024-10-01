import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import HeroImage from '../Images/bg_bg_landing.png';

// Import Swiper and its required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import Logo from '../Images/BTLOGO.png';

function HeroHome() {

  return (
    <>
      {/* Herohome section one start */}
      <section className=''>
        <Container>
          <Row className='gy-md-4 d-flex align-items-center position-relative vh-100'>
            <Col lg={6} md={12} className='hero-home-main'>
              <h6 className='fs-5 fw-bold mb-2 text-b'>IT SERVICES PROVIDER</h6>
              <h4 className='font-monospace fs-5 mb-2'>“सब सुख लहै तुम्हारी सरना, तुम रक्षक काहू को डरना”</h4>
              <p className='lh-base fw-normal text-b opacity-75'>
                BecoderTechnology is a premier IT services provider dedicated to delivering cutting-edge
                solutions across a wide spectrum of digital needs. Choose BecoderTechnology for unparalleled
                service and exceptional results in the digital landscape.
              </p>
            </Col>
            <Col lg={6} md={12}>
              <Image src={HeroImage} alt="image" className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Herohome section one end */}

      {/* Herohome section two start */}
      <section className='pt-4 pb-5'>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            }
          }}
          modules={[Autoplay]}
        >
          {/* Slides */}
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
      {/* Herohome section two end */}
    </>
  );
}

export default HeroHome;
