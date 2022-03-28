import styles from './LoginForm.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'

import logo from '../public/logo-01.svg'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router =  useRouter()

    const { user, login } = useAuth()
    

    const [data, setData] = useState ({
        email:'',
        password:'',
    })

    const loginUser = async (e) => {
        e.preventDefault() 

        try {
            await login(data.email, data.password)
            router.push('/dashboard')
        } catch (error) {
            console.error(error)
        }
        
      }

    return(
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2 }} 
            className={styles.container}
        >
            <div className={styles.hamburger}>
                <Link href='/'>
                    <a>
                        <Hamburger toggled={true}  />
                    </a> 
                </Link>
                
            </div>
           <div className={styles.containerContent}>
               <div className={styles.textContainer}>
               <Image
                            src={logo}
                            alt="Money bag logo"
                            width={150} 
                            height={150} 
                            href='/'
                            />
                    <h1>Login </h1>
                    <h2>Get tipped now!</h2>
                    
               </div>
               <div className={styles.vl}></div>
                <div className={styles.formContainer}>
                    <h1>Enter your details ...</h1>
                    <div className={styles.form}>
                        <form onSubmit={loginUser}>
                            
                            <div>
                                <input 
                                    id="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    placeholder="E-mail address..." 
                                    required 
                                    onChange={(e) =>
                                        setData({
                                          ...data,
                                          email: e.target.value,
                                        })
                                      }
                                      value={data.email}/>
                            </div>
                            <div>
                                <input 
                                    id="password" 
                                    type="password" 
                                    autoComplete="off" 
                                    placeholder="Password..." 
                                    required 
                                    onChange={(e) =>
                                        setData({
                                          ...data,
                                          password: e.target.value,
                                        })
                                      }
                                      value={data.password}/>
                            </div>
                            <div className={styles.button}>
                                <button className={styles.buttonSecondary} type="submit">Login</button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
           </div>
        </motion.div>
    )
}

export default LoginForm