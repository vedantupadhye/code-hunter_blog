import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>coding-hunters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h2 className={styles.title}>
          Welcome to Coding-Hunters
        </h2>
         <Image src ="/homeback.jpg" width ="300" height="250"></Image> 
        
        <p className={styles.description}>
          a blog for all the coders out there
        </p>

        <div className= {styles.blog}>
          
          <h1> Some of my Popular Blogs</h1>
          <div className= {styles.blogitem}>

          <Link href = "/blog"><h2 className= {styles.yellow}>How to become a blockchin developer in 2022</h2></Link>
            <p>as the world is shifting towards web3.0 blockchain developers will be most in demandamongst all in the IT sector.</p>
          

          <Link href = "/blog"><h2 className= {styles.yellow}>How to become a blockchin developer in 2022</h2></Link>
            <p>as the world is shifting towards web3.0 blockchain developers will be most in demandamongst all in the IT sector.</p>
          

            <Link href = "/blog"><h2 className= {styles.yellow}>How to become a blockchin developer in 2022</h2></Link>
            <p>as the world is shifting towards web3.0 blockchain developers will be most in demandamongst all in the IT sector.</p>
          
          </div>
        </div>
      </main>
    </div>

  )
}
