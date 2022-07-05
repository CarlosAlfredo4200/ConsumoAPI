import React from 'react'

const IndividualComp = ({address, email, id,name, phone, username, website}) => {
    

  return (
     
    <div className='individual'>
        <h3><span className='span-individual'>{name} </span>: </h3>
        <p>Id :{' '}<span>{id}</span></p>
        <p></p>
        <p>Usuario :{' '}<span className='dato-span'>{username}</span></p>
        <p>Telefono :{' '}<span className='dato-span'>{phone}</span></p>
        <p>Correo :{' '}<span className='dato-span'>{email}</span></p>
        <p>Website :{' '}<span className='dato-span'>{website}</span></p>
        
         
        
    </div>
  )
}

export default IndividualComp