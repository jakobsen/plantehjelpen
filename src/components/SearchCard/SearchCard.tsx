import React from "react";
import styled from "styled-components";
import { Search } from "react-feather";

function SearchCard() {
  return (
    <Wrapper>
      <SearchHeading>Hvilken plante vil du vite mer om?</SearchHeading>
      <SearchWrapper>
        <SearchInput type="text" name="plant" placeholder="f.eks. «rosebusk»" />
        <SearchButton type="submit"><Search color="white" /></SearchButton>
      </SearchWrapper>
      <ButtonLink href="/">Hva er dette?</ButtonLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: calc(100% - 32px);
  margin: auto;
  background-color: var(--white);
  border-radius: 24px;
  padding: 24px;
  padding-bottom: 48px;
`;

const SearchHeading = styled.h2`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
`;

const SearchButton = styled.a`
display: flex;
align-items: center;
justify-content: center;

 width: 60px;
 height: 42px;
 border: none;
 background-color: var(--secondary-color);
 border-radius: 6px;

 &:hover {
   background-color: var(--secondary-dark);
 }
`;

const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--medium-gray);
  padding-left: 16px;
  width: 70%;

  &::placeholder {
    font-family: inherit;
    color: var(--gray);
  }

  &:focus {
    outline: none;
    border-color: var(--secondary-dark);
  }

`;

const ButtonLink = styled.a`
  display: block;
  width: fit-content;
  color: var(--white);
  background-color: var(--secondary-color);
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 6px;
  margin: 0 auto;

  &:hover {
    background-color: var(--secondary-dark);
  }

  &:focus {
    text-decoration: revert;
  }
`;

export default SearchCard;
