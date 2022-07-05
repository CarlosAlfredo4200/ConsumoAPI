import React from 'react'
import { Link } from 'react-router-dom'


const Navegacion = () => {
  return (
    <div>
        <nav className='nav'>
       <Link to="/" className='btn-nav'>simple</Link>
       <Link to="/tabla" className='btn-nav'>Tabla</Link>
       <Link to="/individual" className='btn-nav'>Individual</Link>
        </nav>
         
         
         
    </div>
  )
}

export default Navegacion