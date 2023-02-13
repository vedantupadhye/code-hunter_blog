import Navbar from '../../components/Navbar'
export const getStaticPaths = async () =>{
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(hunters => {
    return {  
      params: {id: hunters.id.toString() }
  }
})

  return{
  paths,
  fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return{
    props: { hunters : data}
  }
}


const details = ({hunters}) => {
  return (    
   <div className="data">
     <Navbar/>
    <h3>{hunters.name}</h3>
    <h3>{hunters.email}</h3>
    <h3>{hunters.website}</h3>
    <h3>{hunters.phone}</h3>
    
   </div>
  )
}

export default details