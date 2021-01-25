import React from 'react'
import { useAccordionToggle }from 'react-bootstrap'

export default function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>{
      
    });
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'transparent' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  