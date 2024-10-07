import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Leptop from '../Images/28421-3-macbook-photos.png';

function ProductLaptop() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Function to create animations based on the current screen size
        const createAnimations = (screenSize) => {
            const tl = gsap.timeline();

            if (screenSize === 'sm') {
                // Small screen (mobile) animations
                tl.from(`#image2 .pi`, {
                    autoAlpha: 1,
                    y: 780,
                    duration: 5,
                    ease: "expo.out",
                    position: "relative",
                })
                    .from(`#image2 .phone-text`, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: "power1.out",
                    }, "<")
                    .from(`#image2 #textWrap`, {
                        autoAlpha: 0,
                        duration: 1.4,
                        stagger: 1,
                    })
                    .to(`#image2 .pi`, {
                        autoAlpha: 1,
                        scale: 6,
                        width: "120%",
                        duration: 1.5,
                        ease: "power1.out",
                        position: "fixed",
                        pin: true,
                    }, "-=1.5")
                    .to(`#image2 .phone-text #textWrap`, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.5,
                        scale: 0.5,
                    }, "-=1.3");
            } else {
                tl.from(`#image2 .pi`, {
                    autoAlpha: 1,
                    y: 680,
                    duration: 5,
                    ease: "expo.out",
                    position: "relative",
                })
                    .from(`#image2 .phone-text`, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: "power1.out",
                    }, "<")
                    .from(`#image2 #textWrap`, {
                        autoAlpha: 0,
                        duration: 1.4,
                        stagger: 1,
                    })
                    .to(`#image2 .pi`, {
                        autoAlpha: 1,
                        scale: 3.5,
                        width: "100%",
                        duration: 1.5,
                        ease: "power1.out",
                        position: "fixed",
                        pin: true,
                    }, "-=1.5")
                    .to(`#image2 .phone-text #textWrap`, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.5,
                        stagger: 1,
                        scale: 1.5,
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
            trigger: "#image2",
            start: "top top",
            end: "+=200%",
            pin: true,
            animation: tl,
            scrub: 0.2,
            pinSpacing: 1,
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
                trigger: ".line-1-2",
                start: "top top",
                end: "+=1000%",
                scrub: 0,
                pin: true,
                pinSpacing: true
            },
        });

        t1.fromTo(
            ".line-1-2 .first .line",
            { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
            { scaleX: 1, }
        )
            .fromTo(
                ".line-1-2 .first",
                { display: "block", delay: 1 },
                { display: "none" }
            )
            .fromTo(
                ".line-1-2 .second",
                { display: "none", delay: 1 },
                { display: "block" }
            )
            .fromTo(
                ".line-1-2 .second .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
                { scaleX: 1 }
            )
            .fromTo(
                ".line-1-2 .second",
                { display: "block", delay: 1 },
                { display: "none" }
            )
            .fromTo(
                ".line-1-2 .third",
                { display: "none", delay: 1 },
                { display: "block" }
            )
            .fromTo(
                ".line-1-2 .third .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
                { scaleX: 1 }
            )
            .fromTo(
                ".line-1-2 .third",
                { display: "block" },
                { display: "none", delay: 1 }
            )
            .fromTo(
                ".line-1-2 .forth",
                { display: "none", delay: 1 },
                { display: "block" }
            )
            .fromTo(
                ".line-1-2 .forth .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
                { scaleX: 1 }
            )
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <section className='overflow-hidden product'>
                <div id="image2" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
                    <Container id='centered-text'>
                        <Row className='justify-content-center'>
                            <Col lg={10} className='text-center section-header'>
                                <h3>
                                    Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
                                </h3>
                            </Col>
                        </Row>
                    </Container>
                    <div className='pi h-auto overflow-hidden' style={{ width: "50%" }}>
                        <img src={Leptop} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
                        <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#ffffff" }}>
                            <div id="pageWrap">
                                <div id="textWrap" style={{ padding: "40px"}}>
                                    <h2 className='text-black'>Product</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>

            <section className="overflow-hidden py-80" style={{ backgroundColor: "#edf5ff" }}>
                <Container className='line-1-2'>
                    <Row className='position-relative vh-100'>
                        <Col lg={12} className='position-absolute first' style={{ inset: 0 }}>
                            <Row className='vh-100'>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://blog.hotelogix.com/content/images/2024/02/Blog-image-key-work-areas-of-a-hotel-management-software.webp" alt='product' className='img-fluid' />
                                        </div>
                                        <div className="blob"></div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                    <div className="p-0 overflow-hidden">
                                        <div className="content px-3 ">
                                            <span className="line"></span>
                                            <h2>Hotel Management</h2>
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
                                            <h2>Food Ordering</h2>
                                            <p>
                                                This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://pub-5d8aff725acf4e3f9f11593eeae3c846.r2.dev/production/11537/11537-0-original.jpg" alt='product' className='img-fluid' />
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
                                            <Image src="https://miro.medium.com/v2/resize:fit:1400/1*e3NXmbnpZNpSQ4ltzXdTHg.png" alt='product' className='img-fluid' />
                                        </div>
                                        <div className="blob"></div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                    <div className="p-0 overflow-hidden">
                                        <div className="content px-3 ">
                                            <span className="line"></span>
                                            <h2>Sabki Shop</h2>
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
                                            <h2>Gentech Website</h2>
                                            <p>
                                                This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                    <div className="card-11">
                                        <div className="bg">
                                            <Image src="https://i.ytimg.com/vi/GgnfCTCR82E/maxresdefault.jpg" alt='product' className='img-fluid' />
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

export default ProductLaptop;
