import React, {useState} from 'react'
import {Accordion, Card }from 'react-bootstrap'
import {
    faPlus, 
    faMinus
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from '../../Mock/contact.json'
import HeaderImage from '../Utilities/HeaderImage';
export default function ContactContent() {
    const [activeKey, setActiveKey] = useState(0)
    return (     
        <>
            <HeaderImage />
            <Accordion onSelect={setActiveKey}  className="m-5">
                {
                    data.map((item, index) => (
                        <Card key={index} className=" border-0 "> 
                            <Card.Header  className="d-flex bg-white-1 border-0"> 
                                <h3 className="mr-auto">{item.title}</h3>
                                <Accordion.Toggle active={index === activeKey} className="ml-auto" eventKey={index} 
                                    
                                >
                                    {activeKey === index ? <FontAwesomeIcon icon={faMinus}  /> : <FontAwesomeIcon icon={faPlus}  />}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index}>
                                <Card.Body>
                                    {item.content}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))
                }      
            </Accordion>
        </>
    )
}