import React from 'react'
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';
import {Link} from "react-router-dom";
import { deviceSize } from '../responsive';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background-color: ${({ useTransparent }) =>
  useTransparent ? "transparent" : "#264653"};
  `;

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const Seperator = styled.div`
  min-height: 40%;
  width: 1px;
  background-color: #fff;
`;


export  function Navbar() {
  
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
    return (
        <NavbarContainer>
          <Link to="/" >
            <BrandLogo />
            </Link>
           
         <h1> <FontAwesomeIcon icon={faLock} size="3sm" /> Plateforme 100% sécurisée </h1>
            <AccessibilityContainer>
           
            {!isMobile &&     <Marginer direction="horizontal" margin={10} />}
            {!isMobile &&  <Seperator/>}
            <Marginer direction="horizontal" margin={10} />
                
                <Marginer direction="horizontal" margin={10} />
                <Link to="/Register">
                <Button size={11}>Register</Button>
                </Link >
                <Marginer direction="horizontal" margin={5} />
                <Link to="/login">
                <Button size={11}>Login</Button>
                </Link>
            </AccessibilityContainer>
        </NavbarContainer>
    );
}

