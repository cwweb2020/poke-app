import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Card = ({ poke }) => {
  return (
    <>
      {poke.map((c, index) => (
        <div className="card" key={index}>
          <div className="img-card-container">
            <Link to={`/description/${c.id}`}>
              <LazyLoadImage
                className="card-img"
                src={c.sprites.other.dream_world.front_default}
                alt={c.name}
              />
            </Link>
          </div>
          <div className="card-body">
            <h3 className="card-title text-center card-title fs-2">{c.name}</h3>
            <hr />
            <h3 className="card-type">Types : 
             <ul>
            {c.types.map((item) => (
                <li>{item.type.name}</li>
              ))}

             </ul>
            </h3>
           
             
           
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
