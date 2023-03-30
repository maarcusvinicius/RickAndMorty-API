import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../contexts/DataContext";
import CategoryLoader from "../components/Loaders/CategoryLoader";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 20px;

  margin-top: 2rem;

  & > ul {
    display: flex;
    list-style-type: none;

    @media (max-width: 860px) {
      flex-wrap: wrap;
    }
  }

  & > ul li {
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.text};

    cursor: pointer;
    color: ${(props) => props.theme.colors.text};

    margin: 0 0.5rem;
    padding: 0.5rem 1.5rem;

    &.${"active"} {
      background: var(--yellow);
      border-color: var(--yellow);
    }

    @media (max-width: 860px) {
      margin-bottom: 1rem;
    }
  }
`;

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const { getCategories, selectCategory, selectedCategory } = useContext(
    DataContext
  );

  useEffect(() => {
    const categoryList = getCategories();
    setCategories(categoryList);
  }, []);

  const uniqueCategories = new Set(categories || []);
  let Categories = [...uniqueCategories];
  Categories.unshift("Todos");

  if (!categories.length) {
    return (
      <Container>
        <CategoryLoader />
      </Container>
    );
  }

  const handlerClick = (event) => {
    selectCategory(event.currentTarget.id);
  };

  return (
    <Container>
      <ul>
        {Categories.map((category, index) => (
          <li
            key={index}
            id={`${category}`}
            className={selectedCategory === category ? "active" : ""}
            onClick={handlerClick}
          >
            {category}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CategoryList;