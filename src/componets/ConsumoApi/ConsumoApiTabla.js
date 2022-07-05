import React from 'react'

const ConsumoApiTabla = () => {

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
      <h1>Cunsumiendo API en una tabla</h1>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>WebSite</th>
            </tr>
        </thead>
        <tbody>
            {
                equipo.map( item =>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ConsumoApiTabla