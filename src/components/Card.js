import React from 'react'
import Spinner from './Spinner'

const Card = ({characters}) => {



  return (
    <>
      {characters !== undefined ? characters.map(c => (
        <div className="card" key={c.name}>
          <img src={c.url} alt="character" />
          <div className="card-body">
            <h5 className="card-title">{c.name}</h5>
          </div>
        </div>
      ))
           : (<div className='d-flex justify-content-center'><Spinner  /></div>)
      } 
    </>
  )
}

export default Card