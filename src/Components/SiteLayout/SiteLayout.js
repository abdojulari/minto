import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './SiteLayout.module.scss'


export default function SiteLayout(props) {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Header />
                {props.children} 
            </div>
            <Footer />
        </div>
    )
}