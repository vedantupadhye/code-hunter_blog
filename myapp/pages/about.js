import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/about.module.css'
import Image from 'next/image'

const about = () => {
  return (
    <div>
      <Navbar />
      <div className= {styles.heading}>
        <h1>About Page</h1>
          <Image src="/aboutus.jpg" width="800" height="300"></Image>
       </div>
    </div>
  )
}

export default about