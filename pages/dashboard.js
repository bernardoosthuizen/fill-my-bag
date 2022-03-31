import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navBar'
import Hero from '../components/hero'
import { LayoutGroupContext } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

export default function Dashboard() {

  const {user, logout } = useAuth()

  const router = useRouter()

   //    useEffect(() => {
    //         const collectionRef = collection(db, "users")

    //         const querySnapshot = getDocs(collectionRef);

    //         const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    //             console.log(querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    //         })
    //         return unsubscribe
    //    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>The easiest way to add a crypto tipping button to anywhere!</title>
        <meta name="description" content="Create a crypto tipping button that can be put anywhere. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
       <h1>This is the dashboard</h1>
       
                    <button 
                      onClick= {() => {
                        logout()
                        router.push('/login')
                      }}
                      className={styles.buttonPrimary}
                    >Logout</button>
                
      </main>

      
    </div>
  )
}
