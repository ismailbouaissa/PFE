import React from 'react'
import Signup from '../../components/conection/signup';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer';

export  function Rappellsignup() {
    return (
        <PageContainer>
            <Navbar />
         <InnerPageContainer>

            <Signup />
             </InnerPageContainer>  
             <Footer /> 
        </PageContainer>
    );
}
