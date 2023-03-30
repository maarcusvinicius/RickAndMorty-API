import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  max-width: 100%;
`;

const Nav = styled.nav`
  height: 100px;
  margin: auto;
  max-width: 1190px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    margin: 1rem 0;
    width: 10rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    font-size: 25px;

    li a {
      padding: 0 1rem;
      padding-bottom: 29px;
      transition: font-weight, border-bottom 0.2s;
      border-bottom: 3px solid ${(props) => props.theme.colors.primary};
    }
    li a:hover {
      border-bottom: 3px solid ${(props) => props.theme.colors.secundary};
    }

    @media (max-width: 540px) {
      flex-flow: column wrap;
    }
  }

  @media (max-width: 540px) {
    height: auto;
    flex-flow: column wrap;

    ul {
      li a {
        padding: 0 1rem;
        padding-bottom: 12px;
        transition: font-weight, border-bottom 0.2s;
        border-bottom: 3px solid ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

const Item = styled.li`
  cursor: pointer;
  margin-left: 1rem;
  &.${`active`} {
    a {
      color: ${(props) => props.theme.colors.secundary};
      font-weight: 600;
      border-bottom: 3px solid ${(props) => props.theme.colors.secundary};
    }
  }
  &.${`favorite`} {
    position: relative;
  }
  @media (max-width: 540px) {
    margin-left: 2rem;
    margin: 1rem 0;
  }
`;

const CurrentFavorite = styled.span`
  padding: 0 0.3rem;
  font-size: 1.9rem;
  text-align: center;
  color: ${(props) => props.theme.colors.secundary};
  position: absolute;
  left: 100%;
  top: -3px;

  @media (max-width: 540px) {
    top: 0px;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const { countFavorited } = useContext(DataContext);
  return (
    <Container>
      <Nav>
        <img src="icons/logoo.svg" alt="" />
        <ul>
          <Item className={`${router.asPath == "/search" && "active"}`}>
            <Link href="/search">Procurar</Link>
          </Item>
          <Item
            className={`${router.asPath == "/favorites" && "active"} favorite`}
          >
            <Link href="/favorites">Favoritos</Link>
            <CurrentFavorite>{countFavorited}</CurrentFavorite>
          </Item>
        </ul>
      </Nav>
    </Container>
  );
};

export default Navbar;