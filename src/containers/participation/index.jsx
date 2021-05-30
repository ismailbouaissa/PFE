import React from 'react'
import Cotizep from '../../components/cotizep';


import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer';

export  function Participation() {
    return ( <PageContainer>
        <Navbar />
       
        <InnerPageContainer>
            <Cotizep />
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
        
    );
}
