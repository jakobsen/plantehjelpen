import React from "react";
import styled from "styled-components";

import SearchCard from "../SearchCard";
import FooterPicture from "../FooterPicture";

function Home() {
  return (
    <Wrapper>
      <FooterPicture />
      <SearchCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  isolation: isolate;
`;

export default Home;
