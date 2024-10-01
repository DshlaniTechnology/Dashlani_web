import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import About from '../Images/about.png';
import Circle from '../Images/Circle.png';
import cardImg1 from '../Images/card-2-team.png';
import wave from '../Images/wave.png';

const OrangePanel = () => {
    const orangeWrapperRef = useRef(null);
    const lemonWrapperRef = useRef(null);
    const mangoWrapperRef = useRef(null);
    const orangeRef = useRef(null);
    const lemonRef = useRef(null);
    const mangoRef = useRef(null);
    const circleRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Check if it's a mobile device
        const handleResize = () => {
            setIsMobile(window.innerWidth < 480);
        };

        // Set the initial value
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
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
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile]);

    return (
        <section id='About' className='about overflow-hidden bg-b1'>
            <div ref={orangeWrapperRef} className=''>
                <div className='bg-secondary-b py-3 w-100 overflow-hidden' ref={orangeRef}>
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
                                <p className=' text-black text-opacity-50'>
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
            </div>
            {!isMobile && <div className="spacer" style={{ height: '200vh' }}></div>}

            <div ref={lemonWrapperRef} className='panel w-100 h-auto p-0' style={{ position: 'relative' }}>
                <div className='bg-white w-100 bg-secondary-b' ref={lemonRef}>
                    <Container className='py-80 position-relative'>
                        <Row className='justify-content-center'>
                            <Col lg={10} className='text-center section-header'>
                                <h3>
                                    Our <span style={{ color: "rgb(0 127 255)" }}>Team</span>
                                </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='text-black'>
                                <Card className='oue-team border-0 rounded-3 overflow-hidden position-relative'>
                                    <div className='team-img-box position-relative'>
                                        <Card.Img variant="top" className='bg-secondary team-photo position-relative' src={cardImg1} />   
                                        <Image src={wave} alt='team-png' className='img-fluid team-png' />  
                                    </div>
                                    <Card.Body className='position-absolute teme-details'>
                                        <Card.Text className='fs-normal fs-6'>
                                            <h3>dfsf</h3>
                                            <p>asdfswdf</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='text-black'>423</Col>
                            <Col className='text-black'>423</Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {!isMobile && <div className="spacer" style={{ height: '200vh' }}></div>}

            <div ref={mangoWrapperRef} className='panel w-100 h-auto p-0' style={{ position: 'relative' }}>
                <div className='bg-white w-100 vh-100' ref={mangoRef}>

                </div>
            </div>

            {!isMobile && <div className="spacer" style={{ height: '200vh' }}></div>}
        </section>
    );
};

export default OrangePanel;
