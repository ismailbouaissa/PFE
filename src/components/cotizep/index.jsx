
import { motion } from "framer-motion";
import React from 'react'
import styled from 'styled-components'
import { Inscription } from './inscription';



const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;

box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;
const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #2ba679; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
 
`;

const TopContainer = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;
const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`;
export default function Cotizep(props) {
    return ( <BoxContainer> 
      
        <TopContainer>
         
            <BackDrop />
           
            <HeaderContainer>
            
                <HeaderText>WELECOME </HeaderText>
               
                
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <Inscription />
        </InnerContainer>
    </BoxContainer>
       
    );
}
