import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navBar'
import SignUpForm from '../components/signUpForm'

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The easiest way to add a crypto tipping button to anywhere!</title>
        <meta name="description" content="Create a crypto tipping button that can be put anywhere. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      
       <SignUpForm />
      </main>

      
    </div>
  )
}