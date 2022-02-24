import React, { useEffect, useState } from "react";
import { CharConsumer } from "../context";

const Evolution = ({ singlePoke }) => {
  const [evolName, setEvolName] = useState("");
  const { chainEvolution } = CharConsumer();
  console.log("chainEvolution ", chainEvolution);

  useEffect(() => {
    if (singlePoke) {
      setEvolName(singlePoke.species.name);
    }
  }, [singlePoke]);

  return (
    <>
      <section className="evolution-total">
        <div className="evolution-wrapp">
          <h4 className="evolution-heading">Evolutions</h4>
          <div className="box">
            <h2>{evolName}</h2>
          </div>
          <div className="box">
            <h2>{chainEvolution}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Evolution;
