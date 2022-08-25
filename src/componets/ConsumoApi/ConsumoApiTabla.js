import React from 'react'
import { useConsIndividual } from '../CompIndividual/useConsIndividual';


const ConsumoApiTabla = () => {

   const {equipo} = useConsIndividual();
   
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