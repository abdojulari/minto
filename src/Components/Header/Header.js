import React, {useState} from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import {
  faMapMarkerAlt, 
  faAngleDown
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationModal from '../LocationModal/LocationModal';
import { Link } from 'gatsby'

export default function Header () {
    const [modalShow, setModalShow] = useState(false)
    const [location, setLocation] = useState('Ottawa')
    return (
        <>
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand><Link className="text-decoration-none text-black" to="/">Navbar</Link></Navbar.Brand>
                <Button variant="none" onClick={() => setModalShow(true)} className="px-2 d-inline-flex">
                    <span className="ml-1"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                    <span className="ml-1">{location}</span>
                    <span className="ml-1"><FontAwesomeIcon icon={faAngleDown} /></span>
                </Button>
                
            </Container>
        </Navbar>
        <LocationModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            parentcallback={setLocation} 
        />
        </>
    )
}