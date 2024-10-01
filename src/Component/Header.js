import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/BTLOGO.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [sticky, setSticky] = useState(true); // Header starts sticky (visible)
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down, hide the header
                setSticky(false);
            } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
                // Scrolling up or near the top, show the header
                setSticky(true);
            }

            setLastScrollY(currentScrollY);

            // Check if the page is scrolled to apply shadow
            setScrolled(currentScrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Navbar 
            expand="lg" 
            className={`bg-secondary-b z-3 ${scrolled ? 'shadow-b' : ''} ${sticky ? 'position-fixed sticky-header' : 'hide-header'}`}
        >
            <Container>
                <Navbar.Brand href="#"><Image src={Logo} alt="logo" fluid width={120} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='overflow-hidden' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#Home" className='fw-semibold'>Home</Nav.Link>
                        <Nav.Link href="#Service" className='fw-semibold'>Our Services</Nav.Link>
                        <Nav.Link href="#Product" className='fw-semibold'>Products</Nav.Link>
                        <Nav.Link href="#About" className='fw-semibold'>About Us</Nav.Link>
                        <Nav.Link href="#Contact" className='fw-semibold'>Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Item className="d-flex">
                            <Nav.Link eventKey="link-1" className='ms-lg-0 ms-3'><FaLinkedinIn className='fs-5 linkdin' /></Nav.Link>
                            <Nav.Link eventKey="link-1" className='ms-lg-0 ms-3'><FaFacebook className='fs-5 facebook' /></Nav.Link>
                            <Nav.Link eventKey="link-1" className='ms-lg-0 ms-3'><AiFillInstagram className='fs-5 instagram text-b-secondary rounded' /></Nav.Link>
                            <Nav.Link eventKey="link-1" className='ms-lg-0 ms-3'><FaWhatsapp className='fs-5 whatsapp' /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
