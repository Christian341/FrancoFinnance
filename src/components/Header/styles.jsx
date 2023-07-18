import styled from "styled-components";

export const nav = styled.nav`
  background: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: var(--color-primary);
  border-bottom: solid 2px var(--strokeheader-color);

  ul {
    display: flex;
    gap: 1rem;
    font-family: "poppins", sans-serif;
    margin-right: -800px;

    :hover {
      color: var(--btn-color);
      font-weight: 600;
    }
    @media (max-width: 830px) {
      display: none;
    }
  }

  li {
    list-style: none;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--offocus);
    cursor: pointer;
  }

  .btn-log {
    background: var(--btn-color);
    padding: 1rem 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    
    @media (max-width: 830px){
      /* display: none; */
    }
  }


`;
