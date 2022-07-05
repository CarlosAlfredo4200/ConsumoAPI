import React from 'react'
import IndividualComp from './IndividualComp';

const CompIndividual = () => {
    const [equipo, setEquipo] = React.useState([]);

    React.useEffect(() => {
      obtenerEquipo();
    }, []);
  
    const obtenerEquipo = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      setEquipo(users);
      
    };
  return (
    <div>
    <h1>Cunsumiendo API en componente individual</h1>
    
    <ol>
        {
            equipo.map( (items) => (
               
                    <IndividualComp 
                    key={items.id} 
                    {...items}/>
                
            ))
        }
    </ol>
  </div>
  )
}

export default CompIndividual