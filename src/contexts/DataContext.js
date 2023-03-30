import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const [filteredCharacters, setFilteredCharacters] = useState(
    []
  );

  const [filteredByFavorited, setFilteredByFavorited] = useState(
    []
  );

  const setFilterCharacters = (name) => {
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const getFilterFavorited = () => {
    const filtered = characters.filter((item) => item.isFavorite === true);
    return filtered;
  };

  const countFavorited = getFilterFavorited().length;

  const setFavoritedCharacter = (id) => {
    const foundCharacterIndex = characters.findIndex(
      (character) => character.id === id
    );
    let changeCharacter = characters;

    const isFavorited = changeCharacter[foundCharacterIndex].isFavorite;
    changeCharacter[foundCharacterIndex].isFavorite = !isFavorited;

    setFilteredByFavorited(getFilterFavorited());
  };

  useEffect(() => {
    const getData = async () => {
      const response= await fetch(
        "https://rickandmortyapi.com/api/character?limit=20&offset=20",
      ).then((data) => data.json());

      let newCharacter= [];

      response.results.map(async (item) => {
        const res = await fetch(item.url).then((data) => data.json());
        newCharacter.push({ ...res, isFavorite: false });
      });

      setFilteredCharacters(newCharacter);
      setCharacters(newCharacter);
    };
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        filteredCharacters,
        filteredByFavorited,
        countFavorited,
        getFilterFavorited,
        setFavoritedCharacter,
        setFilterCharacters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};