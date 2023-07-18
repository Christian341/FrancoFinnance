import styled from "styled-components";
import imgBack from "../../../assets/Effectss/Lines-effect.svg";

export const Container = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-height: calc(100vh - 70.7px);

  .forgetpass {
    display: flex;
    justify-content: flex-start;
    width: 35rem;
    padding: 0.1rem 2rem 0.5rem 0rem;

    a {
      color: var(--offocus);
    }
  }

  .linkbtn,
  a {
    font-size: 1.5rem;
  }

  .Pou {
    font-size: 1.5rem;
    font-family: "poppins", sans-serif;
    color: var(--offocus);
  }

  a {
    font-weight: 600;
    color: var(--btn-color);
  }

  img {
    width: 50vw;

    @media (max-width: 830px) {
      display: none;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 1rem;

    .btnp {
      display: flex;
      padding: 1.5rem 1rem;
      align-items: center;
      justify-content: center;
      width: 17rem;
      gap: 1rem;

      font-family: "poppins", sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      color: #181818;

      cursor: pointer;

      border-radius: 16px;
      background-color: transparent;
      border: solid 1.5px var(--strokeheader-color);

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  gap: 1rem;

  background-image: url(${imgBack});
  height: calc(100vh - 70.7px);
  background-position: 10px -76px;
  background-size: cover;

  @media (max-width: 830px) {
    height: calc(100vh - 80px);
    background-image: none;
  }

  .btn-enter {
    font-size: 1.8rem;
    border-radius: 10px;
    padding: 1.5rem 2rem;
    width: 35rem;
    background-color: var(--btn-color);
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: white;
    cursor: pointer;

    @media (max-width: 830px) {
      width: 43.5vh;
      padding: 1.8rem 2rem;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 3.25rem;
  font-weight: 700;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    justify-content: flex-start;
  }
`;

export const Input = styled.input`
  /* background-color: red; */
  font-size: 1.6rem;
  padding: 1.5rem 2rem;
  width: 35rem;
  border-radius: 10px;
  border: solid 1.5px var(--strokeheader-color);
  color: var(--btn-color);

  &::placeholder {
    color: var(--strokeheader-color);
  }

  @media (max-width: 830px) {
    width: 43.5vh;
    padding: 2rem 2rem;
  }
`;
