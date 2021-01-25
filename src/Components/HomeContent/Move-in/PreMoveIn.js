import React from 'react'
import {
    faSmileWink, 
    faAngleRight
    } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function PreMoveIn(){
    const premovein = [
        {
            id:1, 
            content: 'Customer Experience'
        },
        {
            id:2, 
            content: 'Sales'
        },
        {
            id:3, 
            content: 'Design Centre'
        },
        {
            id:4, 
            content: 'Construction'
        },
        {
            id:5, 
            content: 'MasterCare Warranty'
        },
        {
            id:6, 
            content: 'Land Development'
        },
        {
            id:7, 
            content: 'Condo Living'
        },
    ]
    return(
    <>
       <div className="d-flex align-items-center mt-2 p-2">
           <p>This is a description of the Pre Move-In Section. 
               This is a description of the Pre Move-In Section.</p>
       </div>
        <ul>
            {
                premovein.map(item =>{
                    return <li key={item.id}
                            className="d-flex w-75 p-2 m-2 border-1 text-decoration-none list-unstyled cursor-pointer bg-gray-300"
                            >
                            <FontAwesomeIcon icon={faSmileWink} className="mr-2"/>
                            {item.content}
                            <FontAwesomeIcon icon={faAngleRight} className="ml-auto" />
                           </li>
                })
            }
        </ul>
    </>)
}