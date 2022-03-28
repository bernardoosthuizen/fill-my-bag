import styles from './Nav.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import checkWindowWidth from '../helpers/checkWindowWidth';
import Hamburger from 'hamburger-react'
import { motion } from 'framer-motion'
import logo from '../public/logo-01.svg'
import { useAuth } from '../context/AuthContext';

const NavBar = () => {

    const [isShowing, setIsShowing] = useState(false)

    const { user } = useAuth()

    if (typeof window !== 'undefined') {
        checkWindowWidth()
      }
    
    const size = checkWindowWidth()

    const links = [
        {name: 'Github', path: 'https://github.com/bernardoosthuizen/fill-my-bag'},
        {name: 'Contact', path: 'https://bernie.codes'},
        
    ]
    
    return(
        <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className={styles.container}
        >
            <div className={styles.mobileMenu}>
                <div className={styles.logo} >
                    <Link href='/' >
                        <a>
                            <Image
                            src={logo}
                            alt="Money bag logo"
                            width={50} 
                            height={50} 
                            href='/'
                            />
                        </a>
                    </Link>
                      
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
                {user ? (
                    <Link href='/dashboard'  >
                    <button className={styles.buttonPrimary}>Dashboard</button>
                </Link>
                ) : (
                    <>
                        <Link href='/signUp'  >
                            <button className={styles.buttonPrimary}>Sign Up</button>
                        </Link>
                        <Link href='/login'  >
                            <button className={styles.buttonSecondary}>Login</button>
                        </Link>
                    </>
                )}
                
                
            </motion.nav>
            : null
            }
        </motion.div>
    )
}

export default NavBar