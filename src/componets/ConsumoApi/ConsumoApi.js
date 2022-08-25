import React from "react";
import { useConsIndividual } from "../CompIndividual/useConsIndividual";

const ConsumoApi = () => {
  const { equipo } = useConsIndividual();
  
  return (
    <div>
      <h1>Cunsumiendo API Version I Simple</h1>
      <ol className="infoApi">
        {equipo.map((item) => (
          <div key={item.id}>
            <h4 >Nombre : {item.name} </h4>
            <li >Usuario : {item.username} </li>
            <li >Correo : {item.email} </li>
            <li >Teléfono :{item.phone} </li>
            <li >Web : {item.website} </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default ConsumoApi;
