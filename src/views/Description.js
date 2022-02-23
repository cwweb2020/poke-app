import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";
import { getSinglePokemon } from '../services';


const Description = () => {
  const [singlePoke, SetSinglePoke] = useState(null)

  //https://pokeapi.co/api/v2/ability/1/

  const {id} = useParams()

  console.log(id);

    useEffect( () => {
       const res = getSinglePokemon(id)
       console.log(res);
      // setstate(getSinglePokemon(id))
      
    }, [id]) 
      
   // console.log("desde desc" + state);

  return (
    <>
        <section className='desc-total'>
          <h2 className='text-center text-capitalize my-5 pb-4'>pokemon</h2>
            <div className="desc-wrapper">
              <div className="desc-pic-container">
                 <img src="https://i.ibb.co/ns5WgTp/pokemon-lets-go-768x432.jpg" alt="" />
              </div>
              <div className="desc-info-container">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, esse, dolorem ducimus porro, deserunt rerum expedita culpa dicta nihil placeat labore aperiam libero minima recusandae suscipit aliquam. Aliquid, ducimus et?</p>
                 

              </div>
              
            </div>
            <ScrollToTop />
        </section>

    </>
  )
}

export default Description