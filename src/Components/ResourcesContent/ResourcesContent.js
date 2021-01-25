import React, {useState} from 'react'
import {Accordion, Card }from 'react-bootstrap'
import CustomToggle from '../Utilities/CustomToggle'
import {
    faPlus, 
    faMinus
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from '../../Mock/resource.json'
import HeaderImage from '../Utilities/HeaderImage';
export default function ResourcesContent() {
    const [activeKey, setActiveKey] = useState()
    return (     
        <>
            <HeaderImage />
            <Accordion  defaultActiveKey={activeKey} activeKey={activeKey} className="m-5">
                {
                    data.map((item, index) => (
                        <Card key={index} className=" border-0 "> 
                            <Card.Header key={index} className="d-flex bg-white-1 border-0"> 
                                <h3 className="mr-auto">{item.title}</h3>
                                <CustomToggle className="ml-auto" eventKey={index} 
                                    handleClick ={() => {
                                        if (activeKey === index ) {
                                            setActiveKey(null)
                                        }else {
                                            setActiveKey(index)
                                        }
                                    }}
                                >
                                    {activeKey === index ? <FontAwesomeIcon icon={faMinus}  /> : <FontAwesomeIcon icon={faPlus}  />}
                                </CustomToggle>
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