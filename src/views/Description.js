import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DescriptionDetail from "../components/DescriptionDetail";
import Evolution from "../components/Evolution";
import ScrollToTop from "../components/ScrollToTop";
import { getSinglePokemon } from "../services";

const Description = () => {
  const [singlePoke, SetSinglePoke] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getSinglePokemon(id).then((res) => {
      SetSinglePoke(res);
    });
  }, [id]);

  return (
    <>
      <section className="desc-total">
        <DescriptionDetail singlePoke={singlePoke} />
        <Evolution singlePoke={singlePoke} />
        <ScrollToTop />
      </section>
    </>
  );
};

export default Description;
