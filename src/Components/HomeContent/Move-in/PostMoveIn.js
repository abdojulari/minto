import React from 'react'
import {
    faSmileWink, 
    faAngleRight
    } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function PostMoveIn(){
    const postmovein = [
        {
            id:1, 
            content: 'Moving In'
        },
        {
            id:2, 
            content: 'New Home Warranty'
        },
        {
            id:3, 
            content: 'Homeowner Responsibilities'
        },
        {
            id:4, 
            content: 'Features & Finishes'
        },
        {
            id:5, 
            content: 'Condo Living'
        },
    ]
    return(
    <>
        <div className="d-flex align-items-center mt-2 p-2">
           <p>This is a description of the Post Move-In Section. 
               This is a description of the Post Move-In Section.</p>
       </div>
        <ul>
            {
                postmovein.map(item =>{
                    return <li key={item.id}
                            className="d-flex w-75 p-2 m-2 border-1 text-decoration-none list-unstyled cursor-pointer bg-gray-300"
                            >
                            <FontAwesomeIcon icon={faSmileWink} className="" />
                            {item.content}
                            <FontAwesomeIcon icon={faAngleRight} className="ml-auto"/>
                           </li>
                })
            }
        </ul>
    </>)
}