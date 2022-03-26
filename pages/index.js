import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navBar'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The easiest way to add a crypto tipping button to anywhere!</title>
        <meta name="description" content="Create a crypto tipping button that can be put anywhere. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <Navbar />
       <Hero />
      </main>

      
    </div>
  )
}
