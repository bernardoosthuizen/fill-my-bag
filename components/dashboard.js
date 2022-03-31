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
                setData({
                    name: data.name.stringValue,
                    email: data.email.stringValue,
                    currency: data.currencies.arrayValue.values,
                    address: data.address.stringValue,
                  })
                
            })
       }, [])

       console.log(data)
    return(
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            className={styles.container}
        >
            <div className={styles.title}>
                <h1>Hello {data.name}</h1>
            </div>
            
        
        
        </motion.div>
    )
}

export default Dashboard