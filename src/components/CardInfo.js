import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageNot from "../assests/unavailable.jfif";

const Container = styled.div`
  display: flex;
  margin: 5px;

  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
  img {
    width: 280px;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }

    @media (max-width: 900px) {
      width: 200px;
    }

    @media (max-width: 568px) {
      width: 100px;
    }
  }

  h5 {
    font-size: 18px;
    @media (max-width: 568px) {
      font-size: 10px;
    }
  }
`;

const TitleDiv = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 200px;
  }
  h4 {
    font-weight: lighter;
    font-size: 24px;
    @media (max-width: 900px) {
      font-size: 20px;
      @media (max-width: 568px) {
        font-size: 12px;
      }
    }
  }
`;

const CardInfo = ({ id, img, mediaType, title, character, overview }) => {
  return (
    <>
      <Container>
        <Link to={`/${mediaType}/${id}/info`}>
          {img ? (
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
          ) : (
            <img src={ImageNot} alt="not available" />
          )}
            {/* la imagen default no se ve tan bien, considera estilarla para que sea igual que las tarjetas (mas alta que ancha) */}
{/* considera un mejor nombre que TitleDiv: nunca es bueno identificar un elemento por su tag de html. 
"TitleContainer" o "InfoContainer" me parecen mejores. */}
          <TitleDiv>
            <h4>{title}</h4>
            {character && <h5>{character}</h5>}
            {overview && <p>{overview}</p>}
          </TitleDiv>
        </Link>
      </Container>
    </>
  );
};

export default CardInfo;
