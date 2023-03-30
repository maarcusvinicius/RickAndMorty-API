import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../contexts/DataContext";

const Container = styled.div`
  position: relative;
  width: 75%;

  & > img {
    cursor: pointer;
    position: absolute;
    left: 95%;
    top: 30%;
  }

  @media (max-width: 540px) {
    & > img {
      left: 87%;
    }
  }
`;

const Input = styled.input`
  /* border: 0.5px solid var(--gray-line); */
  border: 1px solid #dee0e3;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setFilterCharacters } = useContext(DataContext);

  const handlerChange = (event) => {
    const characterName = event.target.value;
    setFilterCharacters(characterName);
    setSearchValue(characterName);
  };

  return (
    <Container>
      <Input
        placeholder="Procure por personagem"
        value={searchValue}
        onChange={handlerChange}
      />
      <img src="icons/search.svg" />
    </Container>
  );
};

export default SearchField;