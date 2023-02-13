import styles from '../../styles/hunters.module.css'
import Navbar from '../../components/Navbar'
import Link from 'next/link';

export const getStaticProps = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();


  return{
    props : {hunters : data}
  }
}


const codinghunters = ({hunters}) => {
  return (
    <div>
      <Navbar/>
      <div classname={styles.bold}> 
      <h1 >The place where you can find the best of blogs</h1>
      <p>here are some of my well knowned blogs</p>
      </div>
      {hunters.map(hunter =>(
        <Link href ={'/blog/' + hunter.id} key={hunter.id}>
          <p className= {styles.single}>
            <h3>{hunter.name}</h3>
          </p>
        </Link>
        ))}
    </div>
  );
}

export default codinghunters