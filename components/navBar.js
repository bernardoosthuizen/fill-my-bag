import styles from './Nav.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import checkWindowWidth from '../helpers/checkWindowWidth';
import Hamburger from 'hamburger-react'
import { motion } from 'framer-motion'

const NavBar = () => {

    const [isShowing, setIsShowing] = useState(false)

    if (typeof window !== 'undefined') {
        checkWindowWidth()
      }
    
    const size = checkWindowWidth()

    const links = [
        {name: 'Github', path: 'https://github.com/bernardoosthuizen/fill-my-bag'},
        {name: 'Contact', path: 'https://github.com/bernardoosthuizen/fill-my-bag'},
        
    ]
    
    return(
        <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className={styles.container}
        >
            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    {/* <Image
                    src={logo}
                    alt="My moves logo"
                    width={150} 
                    />   */}
                </div>
                <div className={styles.hamburger}>
                    <Hamburger toggled={isShowing} toggle={setIsShowing} />
                </div>
            </div>
            
            { isShowing ||  size.width > 767 ?
                <motion.nav  
                    initial={{ opacity: 0, y: -100 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }} 
                    exit={{ opacity: 0, y: -100 }}
                    className={styles.linksMenu} 
                    style={ { display: isShowing || size.width > 767 ? 'flex' : 'none' } }
                >
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} >
                            <a target="_blank" className={styles.linksItem} rel="noopener noreferrer">
                                {link.name}
                            </a>
                        </Link>  
                    );
                })}
                <button className={styles.buttonPrimary}>Sign Up</button>
                <button className={styles.buttonSecondary}>Login</button>
            </motion.nav>
            : null
            }
        </motion.div>
    )
}

export default NavBar