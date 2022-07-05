import { BrowserRouter, Route, Routes, Link } from 'react-router-dom' 
import CompIndividual from './componets/CompIndividual/CompIndividual';
import ConsumoApi from './componets/ConsumoApi/ConsumoApi';
import ConsumoApiTabla from './componets/ConsumoApi/ConsumoApiTabla';
import './App.css';
import Navegacion from './componets/nav/Navegacion';


function App() {
  return (

    <>
     
     <BrowserRouter>
    <Navegacion />

          <Routes>
              <Route path='/' element={<ConsumoApi />} />
              <Route path='tabla' element={<ConsumoApiTabla />} />
              <Route path='individual' element={<CompIndividual />} />
          </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
