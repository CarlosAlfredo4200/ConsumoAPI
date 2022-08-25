 
import IndividualComp from './IndividualComp';
import { useConsIndividual } from './useConsIndividual';


const CompIndividual = () => {
    const {equipo} = useConsIndividual();

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