import styled from '@emotion/styled';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaterContainer from './StarterContainer';
import Banner from './Banner';
import InfoContainer from './InfoContainer';

export default function LadingPage() {

    return (
        <LadingPageStyled className='Quantum_landing-page'>
            <Header />
            <Banner />
            <InfoContainer />
            <StaterContainer />
            <Footer />
        </LadingPageStyled>
    )
}

const LadingPageStyled = styled.div``;