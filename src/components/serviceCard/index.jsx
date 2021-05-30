import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Marginer } from '../marginer';
import { faClock, faLock, faMapMarked} from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';
import { Button } from '../button';
const CardContainer = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
width: 300px;
min-height: 250px;
background-color: #27AE60  ;
box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
margin: 0.5em;
margin-bottom: 1.3em;
 
`;
const TopContainer = styled.div`
  width: 100%;
  
`;
const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
  background-color : #0B5345;
 
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
  background-color : #0B5345;
  
`;
const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #F1C40F   ;
  text-align: start;

`;
const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  font-weight: 400;
`;
const RatingContainer = styled.div`
  display: flex;
  color: #ebe204;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;  
const PriceText = styled.div`
  margin-left: 3px;
  color: #ECF0F1 ;
  font-weight: 700;
`;
export  function ServiceCard(props) {
    const { thumbnailUrl, specialist, title, rate, rating } = props;
    return (
        <CardContainer>
            <TopContainer>
                <ServiceThumbnail>
                <img src={thumbnailUrl} alt={title} />
                </ServiceThumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>{title}</Title>
                <Marginer direction="vertical" margin={10} />
                <SpecialistName>{specialist.fullName}</SpecialistName>
            </ContentContainer>
            <BottomContainer>
                <RatingContainer>
                   <PriceText>{rating}Dh</PriceText>
                  
                </RatingContainer>  
                <b>  Collectés Sur </b>
                <PriceContainer>
                 
                    <PriceText>{rate}DH</PriceText>
                </PriceContainer>
            </BottomContainer>
            <BottomContainer>
              <b><FontAwesomeIcon icon={faMapMarked} size ="3sm" /> Casablanca</b>
              <PriceContainer>
            <FontAwesomeIcon icon={faClock} />  Will end in 64 days 
              </PriceContainer>
              
            </BottomContainer>
            <BottomContainer>
               <b><FontAwesomeIcon icon={faLock} size="3sm" /> Plateforme 100% sécurisée </b>
              
            </BottomContainer>
            
            <BottomContainer> 
              <Link to="/Particep">
              <Button  size={10}>JE PARTICIPE</Button>
              </Link>
            </BottomContainer>
           
        </CardContainer>
    );
}
