// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { Col, Container, Row } from 'react-bootstrap';

// function Product() {
//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         // Function to create animations based on the current screen size
//         const createAnimations = (screenSize, sectionId) => {
//             const tl = gsap.timeline();

//             if (screenSize === 'sm') {
//                 // Small screen (mobile) animations
//                 tl.from("#image .pi", {
//                     autoAlpha: 1,
//                     y: 780,
//                     duration: 5,
//                     ease: "expo.out",
//                     position: "relative",
//                 })
//                 .from("#image .phone-text", {
//                     autoAlpha: 1,
//                     duration: 1.5,
//                     ease: "power1.out",
//                 }, "<")
//                 .from('#textWrap', {
//                     autoAlpha: 0,
//                     duration: 1.4,
//                     stagger: 1,
//                 })
//                 .to("#image .pi", {
//                     autoAlpha: 1,
//                     scale: 1,
//                     width: "120%",
//                     duration: 1.5,
//                     ease: "power1.out",
//                     position: "fixed",
//                     pin: true,
//                 }, "-=1.5")
//                 .to('#image .phone-text #textWrap', {
//                     autoAlpha: 1,
//                     y: 0,
//                     duration: 1.5,
//                     stagger: 1,
//                     scale: 4,
//                 }, "-=1.3");
//             } else {
//                 // Large screen (desktop) animations
//                 tl.from("#image .pi", {
//                     autoAlpha: 1,
//                     y: 680,
//                     duration: 5,
//                     ease: "expo.out",
//                     position: "relative",
//                 })
//                 .from("#image .phone-text", {
//                     autoAlpha: 1,
//                     duration: 1.5,
//                     ease: "power1.out",
//                 }, "<")
//                 .from('#textWrap', {
//                     autoAlpha: 0,
//                     duration: 1.4,
//                     stagger: 1,
//                 })
//                 .to("#image .pi", {
//                     autoAlpha: 1,
//                     scale: 1,
//                     width: "110%",
//                     duration: 1.5,
//                     ease: "power1.out",
//                     position: "fixed",
//                     pin: true,
//                 }, "-=1.5")
//                 .to('#image .phone-text #textWrap', {
//                     autoAlpha: 1,
//                     y: 0,
//                     duration: 1.5,
//                     stagger: 1,
//                     scale: 7,
//                 }, "-=1.3");
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

//         ['image', 'image1'].forEach(sectionId =>{
//             const tl = createAnimations(screenSize, sectionId);

//             ScrollTrigger.create({
//                 trigger: `#${sectionId}`,
//                 start: "top top",
//                 end: "+=200%",
//                 pin: true,
//                 animation: tl,
//                 scrub: 0.3,
//                 pinSpacing: 1,
//             });
          
//         })
        

//         // Cleanup function
//         return () => {
//             tl.revert();
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <>
//             <section id="Product" className='overflow-hidden product'>
//                 <div id="image" className="d-flex justify-content-center align-items-center" style={{ position: 'relative', top: '-50px' }}>
//                     <Container id='centered-text'>
//                         <Row className='justify-content-center'>
//                             <Col lg={10} className='text-center section-header'>
//                                 <h3>
//                                     Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
//                                 </h3>
//                             </Col>
//                         </Row>
//                     </Container>
//                     <div className='pi h-auto overflow-hidden'>
//                         <img src="https://cdn.prod.website-files.com/65f43fad61f335b69f146adb/6631620d3655ee5e5c59d54a_iphone-p-500.webp" className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }}
//                         />
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
//             </section>

//             <section id="Product" className='overflow-hidden product'>
//                 <div id="image1" className="d-flex justify-content-center align-items-center" style={{ position: 'relative', top: '-50px' }}>
//                     <Container id='centered-text'>
//                         <Row className='justify-content-center'>
//                             <Col lg={10} className='text-center section-header'>
//                                 <h3>
//                                     Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
//                                 </h3>
//                             </Col>
//                         </Row>
//                     </Container>
//                     <div className='pi h-auto overflow-hidden'>
//                         <img src="https://cdn.prod.website-files.com/65f43fad61f335b69f146adb/6631620d3655ee5e5c59d54a_iphone-p-500.webp" className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }}
//                         />
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
//             </section>
//         </>
//     );
// }

// export default Product;


import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Col, Container, Row } from 'react-bootstrap';
import Leptop from '../Images/28421-3-macbook-photos.png';
import Tab from '../Images/iped.png';
import iphone from '../Images/iphone.png';

function Product() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Function to create animations based on the current screen size
        const createAnimations = (screenSize, sectionId) => {
            const tl = gsap.timeline();

            if (screenSize === 'sm') {
                // Small screen (mobile) animations
                tl.from(`${sectionId} .pi`, {
                    autoAlpha: 1,
                    y: 780,
                    duration: 5,
                    ease: "expo.out",
                    position: "relative",
                })
                .from(`${sectionId} .phone-text`, {
                    autoAlpha: 1,
                    duration: 1.5,
                    ease: "power1.out",
                }, "<")
                .from(`${sectionId} #textWrap`, {
                    autoAlpha: 0,
                    duration: 1.4,
                    stagger: 1,
                })
                .to(`${sectionId} .pi`, {
                    autoAlpha: 1,
                    scale: 1,
                    width: "120%",
                    duration: 1.5,
                    ease: "power1.out",
                    position: "fixed",
                    pin: true,
                }, "-=1.5")
                .to(`${sectionId} .phone-text #textWrap`, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 1,
                    scale: 4,
                }, "-=1.3");
            } else {
                // Large screen (desktop) animations
                tl.from(`${sectionId} .pi`, {
                    autoAlpha: 1,
                    y: 680,
                    duration: 5,
                    ease: "expo.out",
                    position: "relative",
                })
                .from(`${sectionId} .phone-text`, {
                    autoAlpha: 1,
                    duration: 1.5,
                    ease: "power1.out",
                }, "<")
                .from(`${sectionId} #textWrap`, {
                    autoAlpha: 0,
                    duration: 1.4,
                    stagger: 1,
                })
                .to(`${sectionId} .pi`, {
                    autoAlpha: 1,
                    scale: 2,
                    width: "100%",
                    duration: 1.5,
                    ease: "power1.out",
                    position: "fixed",
                    pin: true,
                }, "-=1.5")
                .to(`${sectionId} .phone-text #textWrap`, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 1,
                    scale: 4,
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

        // Store timelines for cleanup
        const timelines = [];

        // Create animations for both sections
        ['#image1', '#image2', '#image3'].forEach(sectionId => {
            const tl = createAnimations(screenSize, sectionId);
            timelines.push(tl);

            ScrollTrigger.create({
                trigger: sectionId,
                start: "top top",
                end: "+=200%",
                pin: true,
                animation: tl,
                scrub: 0.3,
                pinSpacing: 1,
            });
        });

        return () => {
            timelines.forEach(tl => tl.revert());
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
                                <div id="textWrap" style={{ padding: "40px", backgroundColor: "" }}>
                                    <h2>Product</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>

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
                    <div className='pi h-auto overflow-hidden' style={{width: "50%"}}>
                        <img src={Leptop} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
                        <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#ffffff" }}>
                            <div id="pageWrap">
                                <div id="textWrap" style={{ padding: "40px", backgroundColor: "" }}>
                                    <h2>Product</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>
            
            <section className='overflow-hidden product'>
                <div id="image3" className="d-flex justify-content-center vh-100 align-items-center" style={{ position: 'relative', top: '-50px' }}>
                    <Container id='centered-text'>
                        <Row className='justify-content-center'>
                            <Col lg={10} className='text-center section-header'>
                                <h3>
                                    Products & Delivering <span style={{ color: "rgb(0 127 255)" }}>Cutting-Edge</span> Product Solutions
                                </h3>
                            </Col>
                        </Row>
                    </Container>
                    <div className='pi h-auto overflow-hidden' style={{width: "25%"}}>
                        <img src={Tab} className='product-img overflow-hidden z-1' alt='product' style={{ width: "100%", height: 'auto' }} />
                        <div className='position-absolute phone-text' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#ffffff" }}>
                            <div id="pageWrap">
                                <div id="textWrap" style={{ padding: "40px", backgroundColor: "" }}>
                                    <h2>Product</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>
        </>
    );
}

export default Product;
