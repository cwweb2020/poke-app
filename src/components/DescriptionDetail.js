import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { CharConsumer } from "../context";

const DescriptionDetail = ({ singlePoke }) => {
  const { getSpecies, speciesPoke, pokeDescription } = CharConsumer();

  // gets the url of the species
  const getSpeciesUrl = () => {
    const speciesUrl = singlePoke.species.url;

    getSpecies(speciesUrl);
  };

  useEffect(() => {
    setTimeout(() => {
      getSpeciesUrl();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singlePoke]);

  return (
    <>
      {singlePoke === null ? (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="desc-wrapper">
            <div className="desc-pic-container pt-5 mt-4">
              <img
                src={singlePoke.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
            <div className="desc-info-container">
              <div className="info-wrapper">
                <ul>
                  <li>
                    Name : <span className="space">//</span>{" "}
                    <span>{singlePoke.name}</span>
                  </li>
                  <li>
                    Habitat: <span className="space">//</span>{" "}
                    <span>{speciesPoke}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="description-container">
            <h3>Description</h3>
            <p>{pokeDescription ? pokeDescription : " "}</p>
          </div>
        </>
      )}
    </>
  );
};

export default DescriptionDetail;
