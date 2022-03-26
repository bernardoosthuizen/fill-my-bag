import styles from './Hero.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

  
    
    return(
        <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className={styles.container}
        >
        
        </motion.div>
    )
}

export default Hero