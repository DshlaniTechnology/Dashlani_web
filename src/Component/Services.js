import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {
    useEffect(() => {
        if (typeof gsap.context === 'function') {
            let ctx = gsap.context(() => {
                gsap.set(".photo:not(:first-child)", { opacity: 0.5 ,scale: 1, translateY: "-100%",});

                const animation = gsap.to(".photo:not(:first-child)", {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    translateY: 0,
                    stagger: 1,
                    delay: 2,
                });

                ScrollTrigger.create({
                    trigger: ".gallery",
                    start: "top top",
                    end: "bottom bottom",
                    pin: ".rightblock",
                    animation: animation,
                    scrub: true,
                    markers: false,
                });
            });

            return () => ctx.revert();
        } else {
            console.warn("gsap.context() is not available. Please ensure you're using GSAP 3.11.0 or later.");
        }
    }, []);

    return (
        <>
            {/* Service start */}
            <section id='Service' className="py-80">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='text-center section-header'>
                            <h2 className='fw-medium fs-4 text-b fst-italic mb-1 position-relative'>Our <span>Services</span></h2>
                            <p className='text-black fs-1 text-capitalize text-opacity-75 fw-bold'>
                               We provide best services
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="gallery d-flex" style={{ flexWrap: "wrap" }}>
                                <Row className="left">
                                    <Col>
                                        <Row>
                                            <Col lg={12} className="service-details d-flex flex-column text-center justify-content-center ">
                                                <div className='mx-auto mb-4 d-flex justify-content-center align-items-center'>01</div>
                                                <h3 className='mb-3' >Full Stack Development</h3>
                                                <p className='text-black text-opacity-50'>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications</p>
                                            </Col>
                                            <Col lg={12} className="service-details d-flex flex-column text-center justify-content-center ">
                                                <div className='mx-auto mb-4 d-flex justify-content-center align-items-center'>01</div>
                                                <h3 className='mb-3' >Full Stack Development</h3>
                                                <p className='text-black text-opacity-50'>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications</p>
                                            </Col>
                                            <Col lg={12} className="service-details d-flex flex-column text-center justify-content-center ">
                                                <div className='mx-auto mb-4 d-flex justify-content-center align-items-center'>01</div>
                                                <h3 className='mb-3' >Full Stack Development</h3>
                                                <p className='text-black text-opacity-50'>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications</p>
                                            </Col>
                                            <Col lg={12} className="service-details d-flex flex-column text-center justify-content-center ">
                                                <div className='mx-auto mb-4 d-flex justify-content-center align-items-center'>01</div>
                                                <h3 className='mb-3' >Full Stack Development</h3>
                                                <p className='text-black text-opacity-50'>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications</p>
                                            </Col>
                                            <Col lg={12} className="service-details d-flex flex-column text-center justify-content-center ">
                                                <div className='mx-auto mb-4 d-flex justify-content-center align-items-center'>01</div>
                                                <h3 className='mb-3' >Full Stack Development</h3>
                                                <p className='text-black text-opacity-50'>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications</p>
                                            </Col>
                                            <Col lg={12} className="service-details d-flex flex-column text-center justify-content-center ">
                                                <div className='mx-auto mb-4 d-flex justify-content-center align-items-center'>01</div>
                                                <h3 className='mb-3' >Full Stack Development</h3>
                                                <p className='text-black text-opacity-50'>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='p1 ms-4'>
                                        <Row className="rightblock d-flex vh-100 align-items-center justify-content-end ">
                                            <div className='position-relative box p-0'>
                                                <Col className="photo w-100 h-100 position-absolute">
                                                    <img src="https://futureskillsprime.in//sites/default/files/2021-06/Link%20Sharing-Foundation%20Full%20Stack%20Web%20Development.jpg" alt="img-1" className='h-100 w-100' />
                                                </Col>
                                                <Col className="photo w-100 h-100 position-absolute">
                                                    <img src="https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg" alt="img-2" className='h-100 w-100' />
                                                </Col>
                                                <Col className="photo w-100 h-100 position-absolute">
                                                    <img src="https://www.infoworld.com/wp-content/uploads/2024/06/cso_nw_cloud_computing_cloud_network_circuits_by_denis_isakov_gettyimages-966932508_2400x1600-100814451-orig-100929305-orig.jpg?quality=50&strip=all" alt="img-3" className='h-100 w-100' />
                                                </Col>
                                                <Col className="photo w-100 h-100 position-absolute">
                                                    <img src="https://igtsolutions.com/wp-content/uploads/2022/09/Quality-Engineering-min.png" alt="img-2" className='h-100 w-100' />
                                                </Col>
                                                <Col className="photo w-100 h-100 position-absolute">
                                                    <img src="https://digitalauthority.me/wp-content/uploads/2019/04/shutterstock_572886535.jpg" alt="img-2" className='h-100 w-100' />
                                                </Col>
                                                <Col className="photo w-100 h-100 position-absolute">
                                                    <img src="https://s39569.pcdn.co/wp-content/uploads/2023/03/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpeg" alt="img-2" className='h-100 w-100' />
                                                </Col>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row className="d-block d-sm-none">
                        <Col lg={12} className="details d-flex flex-column justify-content-center">
                            <h3>Full Stack Development</h3>
                            <p>We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                        </Col>
                        <Col lg={12} className="details d-flex flex-column justify-content-center">
                            <h3>UI/UX Design</h3>
                            <p>Our UI/UX design services focus on creating intuitive and engaging user experiences. We design visually stunning interfaces that enhance usability and improve customer satisfaction.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                        </Col>
                        <Col lg={12} className="details d-flex flex-column justify-content-center">
                            <h3>Cloud Solutions</h3>
                            <p>Leverage the power of the cloud with our scalable and secure cloud solutions. From AWS to Azure, we help businesses move to the cloud and optimize their infrastructure.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                        </Col>
                        <Col lg={12} className="details d-flex flex-column justify-content-center">
                            <h3>DevOps Services</h3>
                            <p>Achieve seamless development and operations integration with our DevOps services. We help automate and streamline workflows, ensuring faster time-to-market and continuous delivery.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                        </Col>
                        <Col lg={12} className="details d-flex flex-column justify-content-center">
                            <h3>Mobile App Development</h3>
                            <p>We create high-performance mobile applications for both iOS and Android platforms, using the latest frameworks like React Native and Flutter to ensure cross-platform compatibility and stunning user experiences.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                        </Col>
                        <Col lg={12} className="details d-flex flex-column justify-content-center">
                            <h3>Software Development</h3>
                            <p>We offer custom software development services tailored to meet your specific business needs. From web applications to enterprise software, our solutions are designed to optimize performance and scalability.We offer full-stack development services, providing both front-end and back-end solutions. Our team is skilled in React, Angular, Node.js, Python, and more to create seamless, scalable, and robust applications.</p>
                        </Col>
                    </Row> */}
                </Container>
            </section>
            {/* Service end */}
        </>
    );
}

export default Services;
