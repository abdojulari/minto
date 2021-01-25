import React from 'react'
import { Modal } from 'react-bootstrap'
import styles from './LocationModal.module.scss'
export default function LocationModal(props) {
    const locations = [
        {
            id: 1,
            location: 'Ottawa'
        },
        {
            id: 2,
            location: 'GTA'
        }
    ]
   const handleClick = (value) => {
       props.parentcallback(value)
   }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="d-flex flex-column align-items-center list-unstyled">
              <h1>Choose Your Location</h1>
              {
                  locations.map(item => {
                      return <li 
                                className={`w-75 p-2 m-2 border-1 text-center cursor-pointer ${styles.locationLink}`} 
                                key={item.id}
                                onClick={() => handleClick(item.location)}
                                value={item.location}
                                >
                                {item.location}
                            </li>
                  })
              }
          </ul>
        </Modal.Body>
    
      </Modal>
    );
  }
  