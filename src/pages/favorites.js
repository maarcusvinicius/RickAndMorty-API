import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import DefaultButton from "../components/Buttons/DefaultButton";
import CardList from "../components/Cards/CardList";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { DataContext } from "../contexts/DataContext";

const ContentCenter = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  h2 {
    padding-top: 2rem;
    color: ${(props) => props.theme.colors.text};
  }
  p {
    margin: 1rem 0;
  }
  @media (max-width: 540px) {
    margin: 0 1rem;
    & > img {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 2rem;
`;

const Description = styled.h2`
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

const Favorites = () => {
  const { filteredByFavorited, countFavorited } = useContext(DataContext);
  return (
    <>
      <Navbar />
      <Container>
        {!filteredByFavorited.length ? (
          <ContentCenter>
            <h2>Nenhum personagem encontrado :(</h2>
            <p>Clique no botão abaixo para procurar personagens!</p>
            <Link href="/search">
              <DefaultButton>Procurar personagem</DefaultButton>
            </Link>
          </ContentCenter>
        ) : (
          <Content>
            <Description>{`Você tem ${countFavorited
              .toString()
              .padStart(2, "0")} personagem(s) salvo(s)!`}</Description>
            <CardList charactersList={filteredByFavorited} />
          </Content>
        )}
      </Container>
    </>
  );
};

export default Favorites;