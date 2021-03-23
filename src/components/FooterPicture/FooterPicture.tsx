import React from "react";
import styled from "styled-components";

import picture from "../../img/plante.png";

function FooterPicture() {
  return (
    <Wrapper>
      <Image src={picture} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  /* Use overflow:hidden to crop picture */
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -100px;
`;

export default FooterPicture;
