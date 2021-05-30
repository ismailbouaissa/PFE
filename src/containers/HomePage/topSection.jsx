import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import { BrandLogo } from '../../components/brandLogo';
import { Button } from '../../components/button';
import { Marginer } from "../../components/marginer";
import { deviceSize } from '../../components/responsive';
import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistsImg from "../../images/Work only with the best.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -50px;
  background-size: cover;

 
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const StandoutImage = styled.div`
  width: 40em;
  height: 20em;

  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-content: center;
  }

`;
const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 30px;

  

  
`;



export  function TopSection(props) {
  
    const { children } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return( <TopSectionContainer>
<BackgroundFilter>
{children}
    <TopSectionInnerContainer>

    
    <LogoContainer>
        <BrandLogo  logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}/>
              <Marginer direction="vertical" margin={8} />
        <SloganText>les actions et l'image des grands </SloganText>
        <SloganText> opérateurs donateurs</SloganText> 
        <SloganText>organisation d’événements </SloganText>
        <SloganText>dédiés aux collectes</SloganText>
        <Marginer direction="vertical" margin={15} />
        <Button>join Now</Button>
    </LogoContainer>
    {!isMobile && (<StandoutImage>
        <img src={TheBestSpecialistsImg} alt="best in the field" />
    </StandoutImage>
    )}
    </TopSectionInnerContainer>
</BackgroundFilter>
    </TopSectionContainer>
    );
}
