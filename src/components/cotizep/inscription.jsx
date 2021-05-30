import React from 'react'
import { BoxContainer, FormContainer, Input,  } from './coom';
import { Marginer } from "../marginer";
import { Link } from 'react-router-dom';
import { Button } from '../button';

export  function Inscription(props) {
    return (
        <BoxContainer>  
            
            <FormContainer>
            <Input type="montant" placeholder="Montant Dh" /> 
            <Input type="cin" placeholder="CIN" />  
            <Input type="nom" placeholder="Prénom & Nom" />
            <Input type="email" placeholder="Email" />
            <Input type="tele" placeholder="Telephone" />
            
            </FormContainer>
            <Marginer direction="vertical" margin={30} />
          
            
              <Link to="/CIH">
              <Button  size={10}>JE PARTICIPE</Button>
              </Link>
           
                <Marginer direction="vertical" margin="1em" />
        </BoxContainer>
       
    );
}
