import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'gatsby'


export default function Footer() {
    const menu = [
        {
            url: '/',
            title: 'Home',
            image: 'https://e7.pngegg.com/pngimages/98/702/png-clipart-font-awesome-computer-icons-house-icon-design-house-angle-logo-thumbnail.png'
        },
        {
            url: '/Resources',
            title: 'Resources',
            image: 'https://static.thenounproject.com/png/3078363-200.png'
            
        },
        {
            url: '/Contacts',
            title: 'Contacts',
            image: 'https://img.icons8.com/ios/452/search-contacts.png'
        },
        {
            url: '/Articles',
            title: 'Acticles',
            image: 'https://image.flaticon.com/icons/png/128/2878/2878701.png'
        },
        {
            url: '/Notification',
            title: 'Notifications',
            image: 'https://www.pinclipart.com/picdir/middle/369-3699390_notification-png-notification-icon-png-free-clipart.png'
        },
    
    ]
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <ul className="d-inline-flex list-unstyled">
                {
                 menu.map(item => {
                   return  <li key={item.title} className=" d-flex  px-2 f-3">
                                    <Link 
                                    className="d-flex
                                                font-xs
                                                text-reset 
                                                flex-column 
                                                align-items-center 
                                                text-decoration-none
                                                justify-content-center  
                                                " 
                                    to={item.url}>
                                        <img style= {{width: '30px'}}src={item.image} alt={item.title} />
                                        <span>{item.title}</span>  
                                    </Link>    
                           </li>
                 })   
                }
                </ul>
            </Container>
        </Navbar>
    )
}