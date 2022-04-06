import styles from './Dashboard.module.css'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import {db} from '../config/firebase'
import { useEffect } from 'react'
import { async } from '@firebase/util';

const Dashboard = () => {

    const {user } = useAuth()

    const [ data, setData ] = useState({
        name:'',
        email:'',
        address:'',
        link:'',
        currency:[],
    })
   

       useEffect(() => {
            async function fetchData() {
                const docRef = doc(db, "users", user.uid)

                const docSnap = await getDoc(docRef)

                return docSnap._document.data.value.mapValue.fields 
            }
            fetchData().then((data) => {
                
                const currencyArray =[]
                
                data.currencies.arrayValue.values.map((c) => {
                    currencyArray.push(c.stringValue)
                })
                
                setData({
                    name: data.name.stringValue,
                    email: data.email.stringValue,
                    currency: currencyArray,
                    address: data.address.stringValue,
                  })
                
            })
       }, [])

    return(
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            className={styles.container}
        >
            {data.name ? 
            <>
                <div className={styles.title}>
                    <h1>Hello {data.name}</h1>
                </div>
                <div className={styles.profileDetails}>
                    <h2>My Link</h2>
                    <h2>Your profile</h2>

                    <h3>Crypto Wallet Address</h3>
                    <p>{data.address}</p>
                    <div>

                    </div>
                    <h3>Accepted Cryptocurrencies</h3>
                    {data.currency.map((currency) => {
                          return (
                              <p key={currency} >{currency}</p>
                          )
                    })
                    }
                </div>
            </>
            
            :
            <div className={styles.title}></div>
            }


           
            
        </motion.div>
    )
}

export default Dashboard