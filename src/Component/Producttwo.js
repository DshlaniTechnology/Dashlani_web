// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// function Producttwo() {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Create ScrollTrigger for the first line
//     const firstLineAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".line-1-1", // Targeting the first line
//         start: "top top",      // Animation starts when the top of the first line hits the top of the viewport
//         end: "bottom top",     // Animation ends when the bottom of the first line hits the top of the viewport
//         scrub: 1,             // Smooth scrubbing effect
//         pin: true,             // Pin the section during the animation
//         pinSpacing: true       // Automatically adjust spacing while pinned
//       },
//     });

//     firstLineAnimation.fromTo(".line-1-1 .line",
//       { scaleX: 0, transformOrigin: "left center", ease: "none" },
//       { scaleX: 1 }
//     );

//     // Create ScrollTrigger for the second line
//     const secondLineAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".line-1-2", // Targeting the second line
//         start: "top top",      // Animation starts when the top of the second line hits the top of the viewport
//         end: "bottom top",     // Animation ends when the bottom of the second line hits the top of the viewport
//         scrub: 1,             // Smooth scrubbing effect
//         pin: true,             // Pin the section during the animation
//         pinSpacing: true       // Automatically adjust spacing while pinned
//       },
//     });

//     secondLineAnimation.fromTo(".line-1-2 .line",
//       { scaleX: 0, transformOrigin: "left center", ease: "none" },
//       { scaleX: 1 , pin: 0}
//     );

//     return () => {
//       // Cleanup on unmount
//       firstLineAnimation.kill();
//       secondLineAnimation.kill();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       <section className="overflow-hidden">
//         <div className="overflow-hidden position-relative">
//           <div className="panel red line-1-1 vh-100 overflow-hidden">
//             <div className="content">
//               <p>
//                 <span className="line"></span>
//                 This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//               </p>
//             </div>
//           </div>
//           {/* Spacer to ensure the next section does not overlap */}
//           <div className='spacer vh-100'></div>
//           <div className="panel line-1-2 vh-100 overflow-hidden" style={{ backgroundColor: 'blue' }}>
//             <div className="content">
//               <p>
//                 <span className="line"></span>
//                 This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
//               </p>
//             </div>
//           </div>
//         </div>

//           <div className='spacer vh-100'></div>
//         {/* Additional spacer to ensure proper layout */}
//       </section>
//     </>
//   );
// }

// export default Producttwo;


import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Producttwo() {
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
      { scaleX: 1,}
    )
      .fromTo(
        ".line-1-1 .first",
        { display: "block", delay: 1 },
        { display: "none" }
      )
      .fromTo(
        ".line-1-1 .second",
        { display: "none", delay: 1 },
        { display: "block"}
      )
      .fromTo(
        ".line-1-1 .second .line",
        { scaleX: 0, transformOrigin: "left center", ease: "none", delay: 1 },
        { scaleX: 1}
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
        { scaleX: 1}
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
        { scaleX: 1}
      )
      

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden py-80" style={{backgroundColor: "#edf5ff"}}>
        <Container className='line-1-1'>
          <Row className='position-relative vh-100'>
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
                        This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
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
                      <p>
                        This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
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

            {/* Third Section */}
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
                      <p>
                        This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>.
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
      </section>
    </>
  );
}

export default Producttwo;
