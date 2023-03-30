import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";
import FavoriteButton from "../Buttons/FavoriteButton";
import PrimaryButton from "../Buttons/PrimaryButton";

const Container = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 0.5rem;
  margin-right: 1rem;
  margin-top: 1rem;


  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);

  position: relative;

  padding: 1rem;

  & > div {
    margin: 1rem 0;
  }

  & > h3 {
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};

    margin-bottom: 0.5rem;
  }

  & > div > img {
    border-radius: 0.5rem;
    // background: ${(props) => props.theme.colors.background}${(props) => props.theme.title == "22"};
  }

  @media (max-width: 540px) {
    justify-content: space-between;
  }
`;

const Image = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  
`;

const Card = (props) => {
  const { setShowModal } = useContext(ModalContext);

  const handlerClickCard = () => {
    // console.log(props);
    setShowModal(props);
  };

  return (
    <>
      <Container>
        <Image>
            <img src={props.image} />
        </Image>
        <h3>{props.name}</h3>
        <p>ID: {props.id}</p>

        <PrimaryButton onClick={handlerClickCard}>Ver detalhes</PrimaryButton>
        <FavoriteButton favorited={props.isFavorite} id={props.id} />
      </Container>
    </>
  );
};

export default Card;
