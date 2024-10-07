import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Col, Container, Image, Row } from 'react-bootstrap';
import iphone from '../Images/iphone.png';

function ProductLPhone() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Function to create animations based on the current screen size
        const createAnimations = (screenSize) => {
            const tl = gsap.timeline();

            if (screenSize === 'sm') {
                // Small screen (mobile) animations
                tl.from(`#image1 .pi`, {
                    autoAlpha: 1,
                    y: 780,
                    duration: 5,
                    ease: "expo.out",
                    position: "relative",
                })
                    .from(`#image1 .phone-text`, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: "power1.out",
                    }, "<")
                    .from(`#image1 #textWrap`, {
                        autoAlpha: 0,
                        duration: 1.4,
                        stagger: 1,
                    })
                    .to(`#image1 .pi`, {
                        autoAlpha: 1,
                        scale: 1.5,
                        width: "120%",
                        duration: 1.5,
                        ease: "power1.out",
                        position: "fixed",
                        pin: true,
                    }, "-=1.5")
                    .to(`#image1 .phone-text #textWrap`, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.5,
                        stagger: 1,
                        scale: 2,
                    }, "-=1.3");
            } else {
                tl.from(`#image1 .pi`, {
                    autoAlpha: 1,
                    y: 680,
                    duration: 5,
                    ease: "expo.out",
                    position: "relative",
                })
                    .from(`#image1 .phone-text`, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: "power1.out",
                    }, "<")
                    .from(`#image1 #textWrap`, {
                        autoAlpha: 0,
                        duration: 1.4,
                    })
                    .to(`#image1 .pi`, {
                        autoAlpha: 1,
                        scale: 2,
                        width: "100%",
                        duration: 1.5,
                        ease: "power1.out",
                        position: "fixed",
                        pin: true,
                    }, "-=1.5")
                    .to(`#image1 .phone-text #textWrap`, {
                        autoAlpha: 1,
                        // y: 0,
                        // duration: 1.5,
                        scale: 3,
                    }, "-=1.3");
            }
            return tl;
        };

        const getScreenSize = () => {
            if (window.matchMedia("(max-width: 576px)").matches) {
                return 'sm';
            } else {
                return 'lg';
            }
        };

        const screenSize = getScreenSize();

        const timelines = [];

        const tl = createAnimations(screenSize);
        timelines.push(tl);

        ScrollTrigger.create({
            trigger: "#image1",
            start: "top top",
            end: "+=200%",
            pin: true,
            animation: tl,
            scrub: 0.3,
            pinSpacing: true
        });
        

        return () => {
            timelines.forEach(tl => tl.revert());
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".line-1-1",
                start: "top top",
                end: "+=1000%",
                scrub: 0,
                pin: true,
                pinSpacing: true
            },
        });

        t1.fromTo(
            ".line-1-1 .first .line",
            { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
            { scaleX: 1, }
        )
            .fromTo(
                ".line-1-1 .first",
                { display: "block", delay: 1 },
                { display: "none" }
            )
            .fromTo(
                ".line-1-1 .second",
                { display: "none", delay: 1 },
                { display: "block" }
            )
            .fromTo(
                ".line-1-1 .second .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
                { scaleX: 1 }
            )
            .fromTo(
                ".line-1-1 .second",
                { display: "block", delay: 1 },
                { display: "none" }
            )
            .fromTo(
                ".line-1-1 .third",
                { display: "none", delay: 1 },
                { display: "block" }
            )
            .fromTo(
                ".line-1-1 .third .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
                { scaleX: 1 }
            )
            .fromTo(
                ".line-1-1 .third",
                { display: "block" },
                { display: "none", delay: 1 }
            )
            .fromTo(
                ".line-1-1 .forth",
                { display: "none", delay: 1 },
                { display: "block" }
            )
            .fromTo(
                ".line-1-1 .forth .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
                { scaleX: 1 }
            )


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <section id="Product" className='overflow-hidden product'>
                <div id="image1" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
                    <Container id='centered-text'>
                        <Row className='justify-content-center'>
                            <Col lg={10} className='text-center section-header'>
                                <h3>
                                    Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
                                </h3>
                            </Col>
                        </Row>
                    </Container>
                    <div className='pi h-auto overflow-hidden'>
                        <img src={iphone} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
                        <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "black" }}>
                            <div id="pageWrap">
                                <div id="textWrap">
                                    <h2>Product</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>

            <section className="overflow-hidden py-80" style={{ backgroundColor: "#edf5ff" }}>
                <Container className='line-1-1'>
                    <Row className='position-relative vh-100'>
                        <Col lg={12} className='position-absolute first' style={{ inset: 0 }}>
                            <Row className='vh-100'>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://cdn.dribbble.com/userupload/6759295/file/original-cdfe63f8870fee3119f261102850c81b.jpg?resize=1600x1200" alt='product' className='img-fluid' />
                                        </div>
                                        <div className="blob"></div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                    <div className="p-0 overflow-hidden">
                                        <div className="content px-3 ">
                                            <span className="line"></span>
                                            <h2>Resume Bulider</h2>
                                            <p>
                                                This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        {/* Second Section */}
                        <Col lg={12} className='position-absolute second' style={{ inset: 0 }}>
                            <Row className='vh-100'>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                    <div className="p-0 overflow-hidden">
                                        <div className="content px-3 ">
                                            <span className="line"></span>
                                            <h2>Bus Management</h2>
                                            <p>
                                                This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://erbis.com/static/Frame1(mobile)-73f5d8ecf0c3ce4c58f846a91372a0f9.webp" alt='product' className='img-fluid' />
                                        </div>
                                        <div className="blob"></div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        {/* Third Section */}
                        <Col lg={12} className='position-absolute third' style={{ inset: 0 }}>
                            <Row className='vh-100'>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://cdn.dribbble.com/users/4510782/screenshots/18106592/1_4x.png" alt='product' className='img-fluid' />
                                        </div>
                                        <div className="blob"></div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                    <div className="p-0 overflow-hidden">
                                        <div className="content px-3 ">
                                            <span className="line"></span>
                                            <h2>Kids Game</h2>
                                            <p>
                                                This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={12} className='position-absolute forth' style={{ inset: 0 }}>
                            <Row className='vh-100'>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                    <div className="p-0 overflow-hidden">
                                        <div className="content px-3 ">
                                            <span className="line"></span>
                                            <h2>Prodeals</h2>
                                            <p>
                                                This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPfLa5dCA9EEhH0VJ6cCveyxyvvpP1tUeOg&s" alt='product' className='img-fluid' />
                                        </div>
                                        <div className="blob"></div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ProductLPhone;
