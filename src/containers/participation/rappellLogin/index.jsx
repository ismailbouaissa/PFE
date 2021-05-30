import React from 'react'
import Login from '../../../components/conection/Login'
import { Footer } from '../../../components/footer'
import { Navbar } from '../../../components/navbar'
import { InnerPageContainer,PageContainer } from '../../../components/pageContainer'


export  function RappellLogin() {
    return (
        <PageContainer>
            <Navbar/>
            <InnerPageContainer>
            <Login />
            </InnerPageContainer>
            <Footer/>
        </PageContainer>
        
    );
}
