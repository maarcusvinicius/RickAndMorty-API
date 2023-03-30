import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";
import Card from "./Card";
import Details from "./CardDetails";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-around;

  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin-top: 2rem;
`;


const CardList = ({ charactersList }) => {
  const { isModalActive } = useContext(ModalContext);

  if (!charactersList.length) {
    return <Description>Nenhum personagem foi encontrado :(</Description>;
  }

  return (
    <>
      <Container>
        {charactersList.map((character, index) => (
          <Card key={index} {...character} />
        ))}
      </Container>
      {isModalActive && <Details />}
    </>
  );
};

export default CardList;