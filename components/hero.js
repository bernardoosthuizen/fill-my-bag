import styles from './Hero.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

  
    
    return(
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            className={styles.container}
        >
            <div className={styles.title}>
                <h1>Get tipped in crypto 🚀</h1>
            </div>
            <div className={styles.description}>
                <h2>Create a link you can put anywhere to accept payment in your favourite cryptocurrency.</h2>
                
            </div>
            <motion.div 
            initial={{ opacity: 0, y: +100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            >
                <div className={styles.buttonContainer}>
                    <Link href='/signUp'  >
                        <button className={styles.buttonPrimary}>Create my link</button>
                    </Link>
                </div>
            </motion.div>
            
        
        
        </motion.div>
    )
}

export default Hero