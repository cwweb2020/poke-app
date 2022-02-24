import React from "react";
import Card from "./Card";
import { CharConsumer } from "../context";
import { Section } from "../styled/Section";
import { Wrapper } from "../styled/Wrapper";
import Spinner from "./Spinner";
import { MyButton } from "../styled/MyButton";

const CardsCointainer = () => {
  const { poke, LoadMore, spinner } = CharConsumer();

  return (
    <Section p="80px 0">
      <Wrapper className="wrapper">
        {!spinner ? (
          <Card poke={poke} />
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        )}
      </Wrapper>
      <MyButton onClick={LoadMore}>load more</MyButton>
    </Section>
  );
};

export default CardsCointainer;
