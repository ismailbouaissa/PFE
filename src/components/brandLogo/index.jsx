import React from 'react'
import styled from 'styled-components'
import LogoImg from "../../images/logos/logo.png";


const BrandLogoContainer = styled.div`
display: flex;
align-items: center;
`;
const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "35px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;



export function BrandLogo(props) {
    const {logosize,textsize,color,hiderLogo} = props ;
    return (
        <BrandLogoContainer>

        {!hiderLogo && <LogoImage size={logosize}>
            <img src={LogoImg} alt="Servycing logo"/>
        </LogoImage >}
        <LogoTitle size={textsize} color={color}>CotiZep</LogoTitle>
        </BrandLogoContainer>
    )
}
