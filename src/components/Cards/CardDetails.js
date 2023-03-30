import { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../contexts/DataContext";
import { ModalContext } from "../../contexts/ModalContext";
import PrimaryButton from "../Buttons/PrimaryButton";
import RemoveFavoriteButton from "../Buttons/RemoveFavoriteButton";

const ContainerFixed = styled.div`
  background: ${(props) => props.theme.colors.card}99;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    padding: 7px;
    margin-bottom: 10px;
    width: 30px;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.background}${(props) => props.theme.title == "22"};
  }

  & > h3 {
    margin-bottom: 0.5rem;
  }
`;

const Container = styled.div`
  background: ${(props) => props.theme.colors.card};
  min-width: 400px;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
  color: ${(props) => props.theme.colors.text};

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.3);

  & > h2 {
    margin: 1rem 0;
  }

  & > ul {
    margin-top: 15px;
    list-style-type: none;
  }

  & > ul > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  & > p {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  & > div > img {
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.background}${(props) => props.theme.title == "22"};
    margin-left: 0.5rem;
  }

  & > div > img:first-child {
    margin-left: 10%;
  }

  & > button {
    width: 100%;
    margin-top: 1rem;
  }

  @media (max-width: 540px) {
    min-width: auto;

    & > div > img:first-child {
      margin-left: 0%;
    }
  }
`;

const Details = () => {
  const { setHideModal, selectedCharacter } = useContext(ModalContext);
  const { setFavoritedCharacter } = useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState(selectedCharacter.isFavorite);

  const handlerClickClose = () => {
    setHideModal();
  };

  const handleClickAddFavorite = () => {
    setFavoritedCharacter(selectedCharacter.id);
    setIsFavorite(!isFavorite);
  };

  return (
    <ContainerFixed>
      <Container>
        <Header>
          <h2>{selectedCharacter.name}</h2>
          <span onClick={handlerClickClose}>X</span>
        </Header>
        <hr />
        <h2></h2>
        <div>
          <img src={selectedCharacter.image} alt="" />
        </div>
        <p>Detalhes</p>
        <hr />
        <ul>
          <li>
            <p>Status</p>
            <p>{`${selectedCharacter.status}`}</p>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>Specie</p>
            <p>{`${selectedCharacter.species}`}</p>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>Gender</p>
            <p>{`${selectedCharacter.gender}`}</p>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>Localização</p>
            <p>{`${selectedCharacter.location.name}`}</p>
          </li>
        </ul>
        {isFavorite ? (
          <RemoveFavoriteButton onClick={handleClickAddFavorite}>
            Remover dos favoritos
          </RemoveFavoriteButton>
        ) : (
          <PrimaryButton onClick={handleClickAddFavorite}>
            Adcionar aos favoritos
          </PrimaryButton>
        )}
      </Container>
    </ContainerFixed>
  );
};

export default Details;
