import React from "react";
import styled from "styled-components";

function Header() {
  return (
  <Wrapper>
    <Heading>Plantehjelpen</Heading>
  </Wrapper>)
}

const Wrapper = styled.header`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h1`
  color: var(--white);
  font-size: ${48 / 16}rem;
`;

export default Header;
