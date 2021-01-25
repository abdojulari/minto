import React from 'react'
import {  Tab , Row, Nav, Col} from 'react-bootstrap'
import styles from '../HomeContent/HomeContent.module.scss'
import PreMoveIn from './Move-in/PreMoveIn'
import PostMoveIn from './Move-in/PostMoveIn'
import HeaderImage from '../Utilities/HeaderImage'
export default function HomeContent() {
    return (
        <div>
           <HeaderImage />
           <Tab.Container id="" defaultActiveKey="pre-move-in">
                <Row>
                    <Col >
                        <Nav variant="none" className="flex-row border-bottom mb-2">
                            <Nav.Item className="w-50 link text-black bg-gray-300 py-2" activeClassName={styles.link}>
                                <Nav.Link eventKey="pre-move-in" className="text-dark">Pre Move-in</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="w-50 link text-black bg-gray-300 py-2" activeClassName="styles.link">
                                <Nav.Link eventKey="post-move-in" className="text-dark">Post Move-in</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="pre-move-in">
                               <PreMoveIn />
                            </Tab.Pane>
                            <Tab.Pane eventKey="post-move-in">
                                <PostMoveIn />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </div>
    )
}