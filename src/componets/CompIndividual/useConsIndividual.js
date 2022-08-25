import {useState, useEffect} from 'react'

export const useConsIndividual = ( ) => {
    const [equipo, setEquipo] = useState([]);

    const obtenerEquipo = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      setEquipo(users);
      
    };
    useEffect(() => {
      obtenerEquipo();
    }, [])
    

   

  return  {
    ...equipo,
    equipo,
    
  }
}
