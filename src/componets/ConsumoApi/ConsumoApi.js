import React from "react";

const ConsumoApi = () => {
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    obtenerEquipo();
  }, []);

  const obtenerEquipo = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await data.json();
    setEquipo(users);
  };
  return (
    <div>
      <h1>Cunsumiendo API Version I Simple</h1>
      <ol className="infoApi">
        {equipo.map((item) => (
          <div key={item.id}>
            <h3 >{item.title} </h3>
            <li >{item.body} </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default ConsumoApi;
