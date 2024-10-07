import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import About from '../Images/about.png';
import Circle from '../Images/Circle.png';
import cardImg5 from '../Images/out-teme-4.jpg';
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";

const OrangePanel = () => {
    const orangeWrapperRef = useRef(null);
    const lemonWrapperRef = useRef(null);
    const mangoWrapperRef = useRef(null);
    const orangeRef = useRef(null);
    const lemonRef = useRef(null);
    const mangoRef = useRef(null);
    const circleRef = useRef(null);
    const aboutRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
    const [isAboutVisible, setIsAboutVisible] = useState(false); // Track if #About is visible

    // Resize handler
    const handleResize = () => {
        setIsMobile(window.innerWidth < 480);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsAboutVisible(true);
                } else {
                    setIsAboutVisible(false);
                }
            });
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: orangeWrapperRef.current,
                    scrub: 0.3,
                    pin: true,
                    start: "top top",
                    end: "+=200%",
                    pinSpacing: false,
                }
            });

            const t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: lemonWrapperRef.current,
                    scrub: 0.3,
                    pin: true,
                    start: "top top",
                    end: "+=200%",
                    pinSpacing: false,
                }
            });

            const t3 = gsap.timeline({
                scrollTrigger: {
                    trigger: mangoWrapperRef.current,
                    scrub: 0.3,
                    pin: true,
                    start: "top top",
                    end: "+=200%",
                    pinSpacing: false,
                }
            });

            gsap.to(circleRef.current, {
                rotate: 360,
                duration: 7,
                repeat: -1,
                ease: "linear"
            });

            tl.fromTo(orangeRef.current, { scale: 1 }, { scale: 0.7 });
            t2.fromTo(lemonRef.current, { scale: 0.7 }, { scale: 1 })
                .fromTo(lemonRef.current, { scale: 1 }, { scale: 0.7 });
            t3.fromTo(mangoRef.current, { scale: 0.7 }, { scale: 1 });

        } else {
            // Mobile animation logic for screen sizes < 480px
            const t2 = gsap.timeline();
            const t3 = gsap.timeline();

            t2.fromTo(lemonRef.current, { scale: 0.7 }, { scale: 1 })
                .fromTo(lemonRef.current, { scale: 1 }, { scale: 1 });
            t3.fromTo(mangoRef.current, { scale: 1 }, { scale: 1 }); // Keep mango at scale 1
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]);

    return (
        <section id='About' ref={aboutRef} className='about overflow-hidden bg-b1'>
            <div ref={orangeWrapperRef}>
                <div className='bg-white py-3 w-100 overflow-hidden' ref={orangeRef}>
                    <Container className='py-80 position-relative'>
                        <h2 className='position-absolute about-title text-b text-uppercase'>About Us</h2>
                        <Row className='position-relative'>
                            <Col lg={6} md={12} sm={12} className='about-image position-relative'>
                                <div className='w-100 h-100 rounded-4 overflow-hidden image-box'>
                                    <Image src={About} alt='about' className='img-fluid h-100' />
                                </div>
                                <span id="Circle" ref={circleRef} className='about-circle position-absolute'>
                                    <Image src={Circle} alt='about-circle' className='img-fluid' />
                                </span>
                            </Col>
                            <Col lg={6} md={12} sm={12} className='about-details position-relative'>
                                <p className='text-black text-opacity-50'>
                                    Deshlani Technology is a premier IT services provider dedicated to delivering cutting-edge solutions across a wide spectrum of digital needs. Our expertise encompasses mobile application development, website development, and both web and app designing. We excel in digital marketing, including SEO and ASO, ensuring your brand achieves maximum visibility and engagement. With proficiency in all programming languages, our team of seasoned professionals is committed to transforming your vision into reality with innovative, scalable, and efficient solutions.
                                </p>
                                <span className='rounded-pill about-line position-absolute'></span>
                                <span className='position-absolute text-white about-circle-2'>
                                    <Image src={Circle} alt='about-circle' className='img-fluid' />
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {!isMobile && <div className="spacer" style={{ height: '200vh' }}></div>}
            </div>

            <div ref={lemonWrapperRef}>
                <div className='bg-white py-3 w-100 overflow-hidden' ref={lemonRef}>
                    <Container className='py-80 position-relative'>
                        <Row className='justify-content-center'>
                            <Col lg={10} className='text-center section-header mb-3'>
                                <h3 className='mb-1'>
                                    Our <span style={{ color: "rgb(0 127 255)" }}>Team</span>
                                </h3>
                                <p className='text-black fs-5'>
                                    Discover Our Professionals: An Exclusive Team Dedicated to Your Success
                                </p>
                            </Col>
                        </Row>
                        <Swiper
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                el: "swiper-pagination",
                                clickable: true,
                                bulletActiveClass: 'active-bullet',
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                480: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            modules={[Autoplay, Pagination]}
                            className='text-black'
                        >

                            <SwiperSlide>
                                <Card className='our-team overflow-hidden rounded-5 position-relative'>
                                    <Card.Img variant="top" className='team-photo' src={cardImg5} />
                                    <Card.Body className='position-absolute team-details'>
                                        <h3 className='fs-4 fw-bold text-uppercase mb-2 text-white'>
                                            Upendra Jinjariya
                                        </h3>
                                        <p className='fw-bolder fs-5 mb-3 fst-italic' style={{ color: "#0080ff" }}>
                                            Full-Stack Developer
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='position-absolute team-social'>
                                        <ul className='m-0 p-0 d-flex'>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <AiFillInstagram className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className='our-team overflow-hidden rounded-5 position-relative'>
                                    <Card.Img variant="top" className='team-photo' src={cardImg5} />
                                    <Card.Body className='position-absolute team-details'>
                                        <h3 className='fs-4 fw-bold text-uppercase mb-2 text-white'>
                                            Upendra Jinjariya
                                        </h3>
                                        <p className='fw-bolder fs-5 mb-3 fst-italic' style={{ color: "#0080ff" }}>
                                            Full-Stack Developer
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='position-absolute team-social'>
                                        <ul className='m-0 p-0 d-flex'>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <AiFillInstagram className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className='our-team overflow-hidden rounded-5 position-relative'>
                                    <Card.Img variant="top" className='team-photo' src={cardImg5} />
                                    <Card.Body className='position-absolute team-details'>
                                        <h3 className='fs-4 fw-bold text-uppercase mb-2 text-white'>
                                            Upendra Jinjariya
                                        </h3>
                                        <p className='fw-bolder fs-5 mb-3 fst-italic' style={{ color: "#0080ff" }}>
                                            Full-Stack Developer
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='position-absolute team-social'>
                                        <ul className='m-0 p-0 d-flex'>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <AiFillInstagram className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className='our-team overflow-hidden rounded-5 position-relative'>
                                    <Card.Img variant="top" className='team-photo' src={cardImg5} />
                                    <Card.Body className='position-absolute team-details'>
                                        <h3 className='fs-4 fw-bold text-uppercase mb-2 text-white'>
                                            Upendra Jinjariya
                                        </h3>
                                        <p className='fw-bolder fs-5 mb-3 fst-italic' style={{ color: "#0080ff" }}>
                                            Full-Stack Developer
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='position-absolute team-social'>
                                        <ul className='m-0 p-0 d-flex'>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <AiFillInstagram className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className='our-team overflow-hidden rounded-5 position-relative'>
                                    <Card.Img variant="top" className='team-photo' src={cardImg5} />
                                    <Card.Body className='position-absolute team-details'>
                                        <h3 className='fs-4 fw-bold text-uppercase mb-2 text-white'>
                                            Upendra Jinjariya
                                        </h3>
                                        <p className='fw-bolder fs-5 mb-3 fst-italic' style={{ color: "#0080ff" }}>
                                            Full-Stack Developer
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='position-absolute team-social'>
                                        <ul className='m-0 p-0 d-flex'>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <AiFillInstagram className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className='our-team overflow-hidden rounded-5 position-relative'>
                                    <Card.Img variant="top" className='team-photo' src={cardImg5} />
                                    <Card.Body className='position-absolute team-details'>
                                        <h3 className='fs-4 fw-bold text-uppercase mb-2 text-white'>
                                            Upendra Jinjariya
                                        </h3>
                                        <p className='fw-bolder fs-5 mb-3 fst-italic' style={{ color: "#0080ff" }}>
                                            Full-Stack Developer
                                        </p>
                                    </Card.Body>
                                    <Card.Body className='position-absolute team-social'>
                                        <ul className='m-0 p-0 d-flex'>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaWhatsapp className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <AiFillInstagram className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                            <li className='ps-3'>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className='fs-4 team-icons' />
                                                </a>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            <div className='swiper-controller'>
                                <div className='swiper-pagination'></div>
                            </div>
                        </Swiper>
                    </Container>
                </div>
                {!isMobile && <div className="spacer" style={{ height: '200vh' }}></div>}
            </div>

            <div ref={mangoWrapperRef} >
                <div id='Client' className='bg-white w-100 vh-sm-100 d-flex align-items-center  client-bg' ref={mangoRef}>
                    <Container className='py-80'>
                        <Row>
                            <Col lg={4} md={12} className='d-flex justify-content-center align-items-center'>
                                <div className='pe-sm-2'>
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
                                    loop={true}
                                    // autoplay={{
                                    //     delay: 2000,
                                    // }}  
                                    speed={3000}
                                    freeMode={false}
                                    // freeModeMomentum={false}
                                    breakpoints={{
                                        320: {
                                            spaceBetween: 2
                                        },
                                        480: {
                                            spaceBetween: 5
                                        },
                                        640: {
                                            spaceBetween: 20
                                        },
                                        768: {
                                            spaceBetween: 20
                                        },
                                        1024: {
                                            spaceBetween: 30
                                        }
                                    }}
                                    modules={[Autoplay]}
                                >
                                    <SwiperSlide>
                                        <div className=' d-flex Client-card align-items-center'>
                                            <div className='w-100 position-relative rounded-5 d-flex Client-box align-items-center' >
                                                <div className='p-4 client-description'>
                                                    <h4 className='fs-4 mb-2' style={{ color: "#ecf4ff" }}>Jay Viradiya</h4>
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
                                                <div className='position-absolute overflow-hidden client-image'>
                                                    <Image src={cardImg5} alt='clients' className='w-100' />
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='position-relative d-flex Client-card align-items-center'>
                                            <div className='w-100 rounded-5 d-flex Client-box align-items-center' >
                                                <div className='p-4 client-description'>
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
                                            <div className='position-absolute rounded-5 overflow-hidden client-image'>
                                                <Image src={cardImg5} alt='clients' className='w-100' />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='position-relative d-flex Client-card align-items-center'>
                                            <div className='w-100 rounded-5 d-flex Client-box align-items-center' >
                                                <div className='p-4 client-description'>
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
                                            <div className='position-absolute rounded-5 overflow-hidden client-image'>
                                                <Image src={cardImg5} alt='clients' className='w-100' />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='position-relative d-flex Client-card align-items-center'>
                                            <div className='w-100 rounded-5 d-flex Client-box align-items-center' >
                                                <div className='p-4 client-description'>
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
                                            <div className='position-absolute rounded-5 overflow-hidden client-image'>
                                                <Image src={cardImg5} alt='clients' className='w-100' />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='position-relative d-flex Client-card align-items-center'>
                                            <div className='w-100 rounded-5 d-flex Client-box align-items-center' >
                                                <div className='p-4 client-description'>
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
                                            <div className='position-absolute rounded-5 overflow-hidden client-image'>
                                                <Image src={cardImg5} alt='clients' className='w-100' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {!isMobile && <div className="spacer" style={{ height: '200vh' }}></div>}
            </div>

        </section>
    );
};

export default OrangePanel;
