import React from 'react'
import Link from "next/link";
import styles from"../styles/home.module.css"

const Navbar = () => {
  return (
    <nav>
        <ul className='mainnav'>
              <li>
                <Link href = "/home">Home</Link>
              </li>

              <li>
                <Link href = "/blog">Blog</Link>
              </li>

              <li>
                <Link href = "/contact">Contact Us</Link>
              </li>

              <li>
                <Link href = "/about">About</Link>
              </li>

        </ul>
    </nav>

  );
};

export default Navbar
     
