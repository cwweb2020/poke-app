import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DescriptionDetail from "../components/DescriptionDetail";
import ScrollToTop from "../components/ScrollToTop";
import { getSinglePokemon } from "../services";



const Description = () => {
  const [singlePoke, SetSinglePoke] = useState(null);
  

  const { id } = useParams();

  console.log(id);
  

  useEffect(() => {
    getSinglePokemon(id).then((res) => {
      SetSinglePoke(res);
    });

  }, [id]);

  // console.log(singlePoke);

  return (
    <>
      <section className="desc-total">
          <DescriptionDetail singlePoke={singlePoke} />
        <ScrollToTop />
      </section>
    </>
  );
};

export default Description;
