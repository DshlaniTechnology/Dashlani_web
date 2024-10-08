import React, { useEffect } from 'react';
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import gsap from 'gsap';
import { FaFacebook, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Contactpng from '../Images/contact.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    const animateOuterCircle = () => {
      const outerCircle = document.getElementById("outer-circle");
      if (outerCircle) {
        gsap.to(outerCircle, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "linear",
        });
      }
    };
    animateOuterCircle();
    return () => {
      gsap.killTweensOf("#outer-circle");
    };
  }, []);

  const icons = [FaLinkedinIn, FaWhatsapp, FaFacebook, AiFillInstagram, FaXTwitter];
  const socialMediaLinks = [
    "https://www.linkedin.com/",
    "https://www.whatsapp.com/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.twitter.com/"
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    
    // return ;
    emailjs
      .send(
        'service_5bclu69',  // Your correct EmailJS Service ID
        'template_kqywjq3',  // Your correct EmailJS Template ID
        values,
        'PQPQhou4NhqQqTZq5'  // Your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          resetForm();
        },
        (error) => {
          console.log("Email sending failed:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  

  return (
    <section id='Contact position-relative' className='py-80'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={10} className='text-center section-header mb-5'>
            <h3>Get <span style={{ color: "rgb(0, 127, 255)" }}>In</span> Touch</h3>
          </Col>
          <Col lg={12}>
            <Row className='gy-5'>
              <Col lg={6} md={12} className='text-center overflow-hidden'>
                <div className='main-circle-box position-relative'>
                  <div id="outer-circle">
                    {Array.from({ length: icons.length }).map((_, index) => {
                      const angle = (index / icons.length) * 360;
                      const radius = window.innerWidth < 480 ? 100 : 160;
                      const IconComponent = icons[index % icons.length];
                      const socialLink = socialMediaLinks[index % socialMediaLinks.length];

                      const ballSize = window.innerWidth < 480 ? 50 : 80;

                      const ballStyle = {
                        position: 'absolute',
                        width: `${ballSize}px`,
                        height: `${ballSize}px`,
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(+${angle * 8}deg)`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      };

                      return (
                        <a href={socialLink} key={index} target="_blank" rel="noopener noreferrer">
                          <div style={ballStyle} className='bg-main ball'>
                            <IconComponent className='ball-icons' />
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <Image src={Contactpng} alt='Contact' className='center-ball' />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: '',
                    message: ''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="mb-3 gy-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.name && !!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                          <Form.Control
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phoneNumber}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="enter email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.email && !!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="floatingTextarea2">
                          <Form.Control
                            as="textarea"
                            name="message"
                            placeholder="Leave a message here"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ height: '100px', maxHeight: "250px", minHeight: "250px" }}
                            isInvalid={touched.message && !!errors.message}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Button className="border-2 position-relative overflow-hidden rounded-pill fs-5 fw-bold btn-1 btn-2 py-2 px-4" type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
