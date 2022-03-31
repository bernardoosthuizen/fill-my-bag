import styles from './SignUpForm.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'
import {db} from '../config/firebase'
import logo from '../public/logo-01.svg'
import { useAuth } from '../context/AuthContext'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'

const SignUpForm = () => {

    const { user, signup } = useAuth()
    
    const [ registered, setRegistered ]  = useState(false)

    const [data, setData] = useState ({
        name:'',
        email:'',
        password:'',
        uid: '',
        address:'',
        currency:[],
    })

    let currencies = data.currency
    
    const router = useRouter()

    const registerUser = async (e) => {
        e.preventDefault() 

        try {
            await signup(data.email, data.password)
            setRegistered(true)
            
        } catch (error) {
            console.error(error)
        }

      }

      const setupUser = async (e) => {
        e.preventDefault() 

        const userId = user.uid
       
        try {
            
            await setDoc(doc(db, 'users', userId), {
                name: data.name,
                email: data.email,
                address: data.address,
                currencies: data.currency
            })

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
                    <h1>Sign Up</h1>
                    <h2>Get tipped now!</h2>
                    
               </div>
               <div className={styles.vl}></div>
               {!registered ? 
               <div className={styles.formContainer}>
                    <h1>Enter your details ...</h1>
                    <div className={styles.form}>
                        <form onSubmit={registerUser}>
                            <div>
                                
                                <input 
                                    id="name" 
                                    type="text" 
                                    autoComplete="off" 
                                    placeholder="Username..." 
                                    required 
                                    onChange={(e) =>
                                        setData({
                                          ...data,
                                          name: e.target.value,
                                        })
                                      }
                                      value={data.name}/>
                            </div>
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
                                    minLength="6"
                                    onChange={(e) =>
                                        setData({
                                          ...data,
                                          password: e.target.value,
                                        })
                                      }
                                      value={data.password}/>
                            </div>
                            <div className={styles.button}>
                                <button className={styles.buttonSecondary} type="submit">Next</button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            : <div className={styles.userDetails}>
            <h1>Welcome {data.name} 👋</h1>
            <div className={styles.form}>
                        <form onSubmit={setupUser}>
                            <div>
                            <p>Please enter your crypto wallet address.</p>
                                <input 
                                    id="address" 
                                    type="text" 
                                    autoComplete="off" 
                                    placeholder="Wallet address ..." 
                                    required 
                                    onChange={(e) =>
                                        setData({
                                          ...data,
                                          address: e.target.value,
                                        })
                                      }
                                      value={data.address}/>
                            </div>
                            <p style={{ marginTop: '70px'}}>Select which currencies you want to accept.</p>
                            <div className={styles.radioButtons}>
                                <div className={styles.radioItem}>
                                    <input 
                                    id="avax" 
                                    type="checkbox" 
                                    onChange={(e) => {
                                        if(e.target.checked) {
                                            if (!currencies.includes(e.target.value)) {
                                                currencies.push(e.target.value)
                                            } 
                                        } else {
                                            let index = currencies.indexOf(e.target.value)
                                                if (index !== -1) {
                                                    currencies.splice(index, 1)
                                                }
                                            }
                                        }
                                    }
                                      value='AVAX'/> AVAX
                                </div>
                                <div className={styles.radioItem}>
                                    <input 
                                    id="bnb" 
                                    type="checkbox" 
                                    onChange={(e) => {
                                        if(e.target.checked) {
                                            if (!currencies.includes(e.target.value)) {
                                                currencies.push(e.target.value)
                                            } 
                                        } else {
                                            let index = currencies.indexOf(e.target.value)
                                                if (index !== -1) {
                                                    currencies.splice(index, 1)
                                                }
                                            }
                                        }
                                    }
                                      value='BNB'/> BNB
                                </div>
                                
                            </div>
                          
                            <div className={styles.button}>
                                <button className={styles.buttonSecondary} type="submit">Register</button>
                            </div>
                            
                        </form>
                    </div>
            </div> 
            
            }
                
           </div>
        </motion.div>
    )
}

export default SignUpForm