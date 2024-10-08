import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import gsap from 'gsap';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [sticky, setSticky] = useState(true); // Header starts sticky (visible)
    const [lastScrollY, setLastScrollY] = useState(0);

    // Disable scroll function
    const disableScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setSticky(false);
            } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
                setSticky(true);
            }

            setLastScrollY(currentScrollY);
            setScrolled(currentScrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', disableScroll, { passive: false });

        const NavbarAnimation = gsap.timeline({
            onComplete: () => {
                window.removeEventListener('scroll', disableScroll);
            }
        });

        NavbarAnimation
        .fromTo(".web-logo", {
            y: -30,
            opacity: 0,
            duration: 0.1,
            delay: 0.35
        }, {
            y: 0,
            opacity: 1,
        })
        .fromTo(".header-link", {
            y: -30,
            opacity: 0,
            duration: 0.1,
            delay: 0.3,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.3
        }, ">")
        .fromTo(".navbar-icons", {
            y: -30,
            opacity: 0,
            duration: 2,
            delay: 1.5
        }, {
            y: 0,
            opacity: 1,
            stagger: -0.3
        }, "-=1.5")
        .fromTo(".hero-home-main", {
            x: -100,
            opacity: 0,
            duration: 0.1,
            delay: 0.35
        }, {
            x: 0,
            opacity: 1,
        }, ">")
        .fromTo(".hero-home-video", {
            x: 100,
            opacity: 0,
            duration: 0.1,
            delay: 0.35
        }, {
            x: 0,
            opacity: 1,
        })
        .fromTo(".brand-slider", {
            y: 100,
            opacity: 0,
            duration: 0.1,
            delay: 0.3,
        }, {
            y: 0,
            opacity: 1,
        }, ">");

        return () => {
            window.removeEventListener('scroll', disableScroll);
            NavbarAnimation.kill();
        };
    }, []);

    return (
        <Navbar
            expand="lg" 
            className={`bg-white position-fixed z-3 ${scrolled ? 'shadow-b' : ''} ${sticky ? 'sticky-header' : 'hide-header'}`}
        >
            <Container>
                <Navbar.Brand href="#" className='web-logo'><h2 className='text-center fw-bold fs-4 text-b'>Deshlani<br />Technology</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='overflow-hidden' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto py-3 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#Home" className='fw-semibold mx-2 fs-6 header-link position-relative'>Home</Nav.Link>
                        <Nav.Link href="#Service" className='fw-semibold mx-2 fs-6 header-link position-relative'>Our Services</Nav.Link>
                        <Nav.Link href="#Product" className='fw-semibold mx-2 fs-6 header-link position-relative'>Products</Nav.Link>
                        <Nav.Link href="#About" className='fw-semibold mx-2 fs-6 header-link position-relative'>About Us</Nav.Link>
                        <Nav.Link href="#Contact" className='fw-semibold mx-2 fs-6 header-link position-relative'>Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Item className="d-flex">
                            <Nav.Link eventKey="link-1" className='ms-lg-0 navbar-icons ms-3'><FaLinkedinIn className='fs-5 linkdin' /></Nav.Link>
                            <Nav.Link eventKey="link-1" className='ms-lg-0 navbar-icons ms-3'><FaFacebook className='fs-5 facebook' /></Nav.Link>
                            <Nav.Link eventKey="link-1" className='ms-lg-0 navbar-icons ms-3'><AiFillInstagram className='fs-5 instagram text-b-secondary rounded' /></Nav.Link>
                            <Nav.Link eventKey="link-1" className='ms-lg-0 navbar-icons ms-3'><FaWhatsapp className='fs-5 whatsapp' /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
