import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../contexts/DataContext";

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  top: 85%;
  left: 80%;

  svg {
    position: absolute;
    right: 25%;
    top: -27%;
  }
`;

const FavoriteButton = ({ favorited, id }) => {
  const { setFavoritedCharacter } = useContext(DataContext);

  const handlerClick = () => {
    setFavoritedCharacter(id);
  };

  return (
    <Container onClick={handlerClick}>
      {favorited ? (
        <img src={"icons/star-yellow.svg"} alt="" />
      ) : (
        <img src={"icons/star.svg"} alt="" />
      )}
    </Container>
  );
};

export default FavoriteButton;