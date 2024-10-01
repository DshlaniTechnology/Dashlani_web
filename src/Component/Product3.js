// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { Col, Container, Image, Row } from 'react-bootstrap';
// import Leptop from '../Images/28421-3-macbook-photos.png';
// import Tab from '../Images/iped.png';
// import iphone from '../Images/iphone.png';
// import Producttwo from './Producttwo';
// import icons from '../Images/icons.png';

// function Product() {
//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         // Function to create animations based on the current screen size
//         const createAnimations = (screenSize, sectionId) => {
//             const tl = gsap.timeline();

//             if (screenSize === 'sm') {
//                 // Small screen (mobile) animations
//                 tl.from(`${sectionId} .pi`, {
//                     autoAlpha: 1,
//                     y: 780,
//                     duration: 5,
//                     ease: "expo.out",
//                 })
//                     .from(`${sectionId} .pi #textWrap Image`, {
//                         autoAlpha: 0,
//                         duration: 1.4,
//                         scale: 2,
//                         stagger: 1,
//                     })
//                     .to(`${sectionId} .pi`, {
//                         autoAlpha: 1,
//                         scale: 2,
//                         width: "140%",
//                         duration: 1.5,
//                         ease: "power1.out",
//                     }, "-=1.5")
//                     .to(`${sectionId} .phone-text #textWrap Image`, {
//                         autoAlpha: 1,
//                         y: 0,
//                         duration: 1.5,
//                         stagger: 1,
//                         scale: 4,
//                     }, "-=1.3")
//                 // .to(`${sectionId} .pi`, {
//                 //     duration: 0,
//                 //     pin: true,
//                 //     onComplete: () => {
//                 //         // Start the line-1-1 timeline after this animation completes
//                 //         gsap.fromTo(".line-1-1 .first .line", { scaleX: 0, transformOrigin: "left center", ease: "none" }, { scaleX: 1, duration: 1 });
//                 //     },
//                 // });
//             } else {
//                 // Large screen (desktop) animations
//                 tl.from(`${sectionId} .pi`, {
//                     y: 680,
//                     duration: 5,
//                     ease: "expo.out",
//                 })
//                 .to(`${sectionId} .pi`, {
//                     scale: 1.4,
//                     width: "110%",
//                     duration: 1.5,
//                     pin: true,
//                     pinSpacing: true,
//                     ease: "power1.out",
//                 })
//                 .to(`${sectionId} .phone-text #textWrap`, {
//                     y: 0,
//                     duration: 1.5,
//                     autoAlpha: 0,
//                 }, ">")
//                 .from(`${sectionId} .line-1-1`, {
//                     display: "block",
//                 },">")
//                 .to(`${sectionId} .line-1-1`, {
//                     display: "none",
//                 })

//             }
//             return tl;
//         };

//         const getScreenSize = () => {
//             if (window.matchMedia("(max-width: 576px)").matches) {
//                 return 'sm';
//             } else {
//                 return 'lg';
//             }
//         };

//         const screenSize = getScreenSize();

//         // Store timelines for cleanup
//         const timelines = [];

//         // Create animations for both sections
//         ['#image1', '#image2', '#image3'].forEach(sectionId => {
//             const tl = createAnimations(screenSize, sectionId);
//             timelines.push(tl);

//             ScrollTrigger.create({
//                 trigger: sectionId,
//                 start: "top top",
//                 end: "+=200%",
//                 pin: true,
//                 animation: tl,
//                 scrub: 0.3,
//                 pinSpacing: 1,
//             });
//         });

//         gsap.registerPlugin(ScrollTrigger);

//         const t1 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".line-1-1",
//                 start: "top top",
//                 end: "+=200%",
//                 scrub: 0,
//                 display: "block",
//                 pin: true,
//                 pinSpacing: true
//             },
//         });

//         t1.fromTo(
//                 ".line-1-1 .first .line",
//                 { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
//                 { scaleX: 1, }
//             )
//             .fromTo(
//                 ".line-1-1 .first",
//                 { display: "block", delay: 1 },
//                 { display: "none" }
//             )
//             .fromTo(
//                 ".line-1-1 .second",
//                 { display: "none", delay: 1 },
//                 { display: "block" }
//             )
//             .fromTo(
//                 ".line-1-1 .second .line",
//                 { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
//                 { scaleX: 1 }
//             )
//             .fromTo(
//                 ".line-1-1 .second",
//                 { display: "block", delay: 1 },
//                 { display: "none" }
//             )
//             .fromTo(
//                 ".line-1-1 .third",
//                 { display: "none", delay: 1 },
//                 { display: "block" }
//             )
//             .fromTo(
//                 ".line-1-1 .third .line",
//                 { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
//                 { scaleX: 1 }
//             )
//             .fromTo(
//                 ".line-1-1 .third",
//                 { display: "block" },
//                 { display: "none", delay: 1 }
//             )
//             .fromTo(
//                 ".line-1-1 .forth",
//                 { display: "none", delay: 1 },
//                 { display: "block" }
//             )
//             .fromTo(
//                 ".line-1-1 .forth .line",
//                 { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
//                 { scaleX: 1 }
//             )


//         return () => {
//             timelines.forEach(tl => tl.revert());
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <>
//             <section id="Product" className='overflow-hidden product'>
//                 <div id="image1" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
//                     <Container className='centered-text'>
//                         <Row className='justify-content-center'>
//                             <Col lg={10} className='text-center section-header'>
//                                 <h3>
//                                     Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
//                                 </h3>
//                             </Col>
//                         </Row>
//                     </Container>
//                     <div className='pi h-auto overflow-hidden'>
//                         <img src={iphone} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
//                         <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
//                                 <div id="textWrap" >
//                                     <Image src={icons} alt="icons" className="img-fluid" style={{ width: "800%" }} />
//                                 </div>
//                         </div>
//                     </div>
//                     <Container className='line-1-1'>
//                         <Row className='position-relative vh-100'>
//                             <Col lg={12} className='position-absolute first' style={{ inset: 0 }}>
//                                 <Row className='vh-100'>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                         <div className="card-11">
//                                             <div className="bg">
//                                                 <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                             </div>
//                                             <div className="blob"></div>
//                                         </div>
//                                     </Col>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                         <div className="p-0 overflow-hidden">
//                                             <div className="content px-3 ">
//                                                 <span className="line"></span>
//                                                 <p>
//                                                     This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Col>


//                             <Col lg={12} className='position-absolute second' style={{ inset: 0 }}>
//                                 <Row className='vh-100'>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                         <div className="p-0 overflow-hidden">
//                                             <div className="content px-3 ">
//                                                 <span className="line"></span>
//                                                 <p>
//                                                     This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                         <div className="card-11">
//                                             <div className="bg">
//                                                 <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                             </div>
//                                             <div className="blob"></div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Col>


//                             <Col lg={12} className='position-absolute third' style={{ inset: 0 }}>
//                                 <Row className='vh-100'>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                         <div className="card-11">
//                                             <div className="bg">
//                                                 <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                             </div>
//                                             <div className="blob"></div>
//                                         </div>
//                                     </Col>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                         <div className="p-0 overflow-hidden">
//                                             <div className="content px-3">
//                                                 <span className="line"></span>
//                                                 <p>
//                                                     This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Col>

//                             <Col lg={12} className='position-absolute forth' style={{ inset: 0 }}>
//                                 <Row className='vh-100'>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                         <div className="p-0 overflow-hidden">
//                                             <div className="content px-3 ">
//                                                 <span className="line"></span>
//                                                 <p>
//                                                     This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                     <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                         <div className="card-11">
//                                             <div className="bg">
//                                                 <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                             </div>
//                                             <div className="blob"></div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//                 <div className="spacer"></div>
//             </section>




//             {/* <section className='overflow-hidden product'>
//                 <div id="image2" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
//                     <Container id='centered-text'>
//                         <Row className='justify-content-center'>
//                             <Col lg={10} className='text-center section-header'>
//                                 <h3>
//                                     Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
//                                 </h3>
//                             </Col>
//                         </Row>
//                     </Container>
//                     <div className='pi h-auto overflow-hidden' style={{ width: "50%" }}>
//                         <img src={Leptop} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
//                         <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#ffffff" }}>
//                             <div id="pageWrap">
//                                 <div id="textWrap" style={{ padding: "40px", backgroundColor: "" }}>
//                                     <h2>Product</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="spacer"></div>
//             </section> */}
//             {/* <section className="overflow-hidden" style={{ backgroundColor: "#edf5ff" }}>
//                 <Container className='line-1-1'>
//                     <Row className='position-relative vh-100'>
//                         <Col lg={12} className='position-absolute first' style={{ inset: 0 }}>
//                             <Row className='vh-100'>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                     <div className="card-11">
//                                         <div className="bg">
//                                             <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                         </div>
//                                         <div className="blob"></div>
//                                     </div>
//                                 </Col>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                     <div className="p-0 overflow-hidden">
//                                         <div className="content px-3 ">
//                                             <span className="line"></span>
//                                             <p>
//                                                 This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>


//                         <Col lg={12} className='position-absolute second' style={{ inset: 0 }}>
//                             <Row className='vh-100'>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                     <div className="p-0 overflow-hidden">
//                                         <div className="content px-3 ">
//                                             <span className="line"></span>
//                                             <p>
//                                                 This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </Col>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                     <div className="card-11">
//                                         <div className="bg">
//                                             <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                         </div>
//                                         <div className="blob"></div>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>


//                         <Col lg={12} className='position-absolute third' style={{ inset: 0 }}>
//                             <Row className='vh-100'>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                     <div className="card-11">
//                                         <div className="bg">
//                                             <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                         </div>
//                                         <div className="blob"></div>
//                                     </div>
//                                 </Col>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                     <div className="p-0 overflow-hidden">
//                                         <div className="content px-3 ">
//                                             <span className="line"></span>
//                                             <p>
//                                                 This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>

//                         <Col lg={12} className='position-absolute forth' style={{ inset: 0 }}>
//                             <Row className='vh-100'>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                                     <div className="p-0 overflow-hidden">
//                                         <div className="content px-3 ">
//                                             <span className="line"></span>
//                                             <p>
//                                                 This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </Col>
//                                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
//                                     <div className="card-11">
//                                         <div className="bg">
//                                             <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
//                                         </div>
//                                         <div className="blob"></div>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section> */}
//             {/*  <section className='overflow-hidden product'>
//                 <div id="image3" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
//                     <Container id='centered-text'>
//                         <Row className='justify-content-center'>
//                             <Col lg={10} className='text-center section-header'>
//                                 <h3>
//                                     Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
//                                 </h3>
//                             </Col>
//                         </Row>
//                     </Container>
//                     <div className='pi h-auto overflow-hidden' style={{width: "25%"}}>
//                         <img src={Tab} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
//                         <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#ffffff" }}>
//                             <div id="pageWrap">
//                                 <div id="textWrap" style={{ padding: "40px", backgroundColor: "" }}>
//                                     <h2>Product</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="spacer"></div>
//             </section> */}

//             {/* Include your Producttwo component here */}
//         </>
//     );
// }

// export default Product;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Col, Container, Image, Row } from 'react-bootstrap';
import iphone from '../Images/iphone.png';
import icons from '../Images/icons.png';

function Product() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Function to create animations for the phone
        const createPhoneAnimation = (screenSize, sectionId) => {
            const tl = gsap.timeline();

            if (screenSize === 'sm') {
                tl.from(`${sectionId} .pi`, {
                    autoAlpha: 1,
                    y: 780,
                    scale: 1.5, // Start with scaling effect
                    duration: 5,
                    ease: "expo.out",
                })
                    .from(`${sectionId} .pi #textWrap Image`, {
                        autoAlpha: 0,
                        duration: 1.4,
                        scale: 2,
                        stagger: 1,
                    })
                    .to(`${sectionId} .pi`, {
                        y: 0, // Move to y: 0
                        scale: 2, // Simultaneously scale to 2
                        width: "140%", // Optional: Modify the width for better effect
                        duration: 1.5,
                        ease: "power1.out",
                    }, "-=1.5") // Make this simultaneous with the previous animation
                    .to(`${sectionId} .phone-text #textWrap Image`, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.5,
                        stagger: 1,
                        scale: 4,
                    }, "-=1.3");
            } else {
                tl.from(`${sectionId} .pi`, {
                    y: 680,
                    duration: 5,
                    ease: "expo.out",
                })
                    .to(`${sectionId} .pi`, {
                        y: 0, // Move to y: 0
                        duration: 5,
                        ease: "power1.out",
                    })
                    .to(`${sectionId} .pi`, {
                        scale: 1.4,
                        width: "110%",
                        duration: 5,
                        ease: "power1.out",
                    }, ">")
            }
            return tl;
        };

        // Line animation
        const createLineAnimation = () => {
            const tl = gsap.timeline();

            tl.fromTo(
                ".line-1-1 .first .line",
                { scaleX: 0, transformOrigin: "left center", ease: "none", autoAlpha: 0 },
                { scaleX: 1, duration: 1, autoAlpha: 1 }
            )
                .to(".line-1-1 .first", { autoAlpha: 0 })
                .fromTo(
                    ".line-1-1 .second",
                    { autoAlpha: 0 },
                    { autoAlpha: 1 }
                )
                .fromTo(
                    ".line-1-1 .second .line",
                    { scaleX: 0, transformOrigin: "left center", ease: "none" },
                    { scaleX: 1, duration: 1 }
                )
                .to(".line-1-1 .second", { autoAlpha: 0 })
                .fromTo(
                    ".line-1-1 .third",
                    { autoAlpha: 0 },
                    { autoAlpha: 1 }
                )
                .fromTo(
                    ".line-1-1 .third .line",
                    { scaleX: 0, transformOrigin: "left center", ease: "none" },
                    { scaleX: 1, duration: 1 }
                )
                .to(".line-1-1 .third", { autoAlpha: 0 })
                .fromTo(
                    ".line-1-1 .forth",
                    { autoAlpha: 0 },
                    { autoAlpha: 1 }
                )
                .fromTo(
                    ".line-1-1 .forth .line",
                    { scaleX: 0, transformOrigin: "left center", ease: "none" },
                    { scaleX: 1, duration: 1 }
                );

            return tl;
        };

        // Master timeline
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#image1",
                start: "top top",
                end: "+=1000",
                scrub: 0.5,
                pin: true,
                pinSpacing: 1,
            },
        });

        const screenSize = window.matchMedia("(max-width: 576px)").matches ? 'sm' : 'lg';

        // Ensure phone and line elements are visible and have proper z-index
        gsap.set(".pi", { autoAlpha: 1, zIndex: 1 });
        gsap.set(".line-1-1", { autoAlpha: 0, zIndex: 2 }); // Start hidden

        // Create phone animation and add to master timeline
        const phoneAnimation = createPhoneAnimation(screenSize, '#image1');
        masterTimeline.add(phoneAnimation);

        // Show line animation after phone animation finishes
        masterTimeline.to(".line-1-1", { autoAlpha: 1 }, "+=0.5");

        // Add the line animation to the master timeline after phone animation
        const lineAnimation = createLineAnimation();
        masterTimeline.add(lineAnimation, ">");

        // Cleanup on component unmount
        return () => {
            masterTimeline.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <section id="Product" className='overflow-hidden product'>
                <div id="image1" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
                    <Container className='centered-text'>
                        <Row className='justify-content-center'>
                            <Col lg={10} className='text-center section-header'>
                                <h3>
                                    Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
                                </h3>
                            </Col>
                        </Row>
                    </Container>
                    <div className='pi h-auto overflow-hidden' style={{ display: "block", position: 'relative', zIndex: 1 }}>
                        <img src={iphone} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
                        <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                <Image src={icons} alt="icons" className="img-fluid" style={{ width: "800%" }} />
                        </div>
                    </div>
                    <div className='bg-secondary-b line-1-1' style={{  zIndex: 2 }}>
                        <Container className=''>
                            <Row className='position-relative vh-100'>
                                {/* First Line Section */}
                                <Col lg={12} className='position-absolute first' style={{ inset: 0 }}>
                                    <Row className='vh-100'>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                            <div className="card-11">
                                                <div className="bg">
                                                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
                                                </div>
                                                <div className="blob"></div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                            <div className="p-0 overflow-hidden">
                                                <div className="content px-3 ">
                                                    <span className="line"></span>
                                                    <p>
                                                        This is the first line's content.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                {/* Second Line Section */}
                                <Col lg={12} className='position-absolute second' style={{ inset: 0 }}>
                                    <Row className='vh-100'>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                            <div className="p-0 overflow-hidden">
                                                <div className="content px-3 ">
                                                    <span className="line"></span>
                                                    <p>
                                                        This is the second line's content.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                            <div className="card-11">
                                                <div className="bg">
                                                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
                                                </div>
                                                <div className="blob"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                {/* Third Line Section */}
                                <Col lg={12} className='position-absolute third' style={{ inset: 0 }}>
                                    <Row className='vh-100'>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                            <div className="card-11">
                                                <div className="bg">
                                                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
                                                </div>
                                                <div className="blob"></div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                            <div className="p-0 overflow-hidden">
                                                <div className="content px-3 ">
                                                    <span className="line"></span>
                                                    <p>
                                                        This is the third line's content.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                {/* Fourth Line Section */}
                                <Col lg={12} className='position-absolute forth' style={{ inset: 0 }}>
                                    <Row className='vh-100'>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                            <div className="p-0 overflow-hidden">
                                                <div className="content px-3 ">
                                                    <span className="line"></span>
                                                    <p>
                                                        This is the fourth line's content.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
                                            <div className="card-11">
                                                <div className="bg">
                                                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='product' className='img-fluid' />
                                                </div>
                                                <div className="blob"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>
        </>
    );
}

export default Product;
