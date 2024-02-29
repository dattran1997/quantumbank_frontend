import { ButtonStyled } from '@/components/Style/ButtonStyled';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <NotFoundStyled className='Quantum_page-not-found'>
            <h2 className='Quantum_page-not-found-title'>404</h2>
            <p className='Quantum_page-not-found-sub-title'>Page not found</p>
            <ButtonStyled 
                variant='contained' 
                color='primary' 
                onClick={() => navigate('/')}>Go to Home</ButtonStyled>
        </NotFoundStyled>
    )
}

const NotFoundStyled = styled.div`
    &.Quantum_page-not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 57.5px);
        flex-direction: column;
        gap: 12px;
        font-size: 2rem;
        font-weight: 700;
        color: #3f51b5;

        .Quantum_page-not-found-title {
            font-size: 5rem;
            font-weight: 700;
            line-height: 64px;
            color: #3f51b5;
            margin: 0px 0px 12px 0px;
        }

        .Quantum_page-not-found-sub-title {
            font-size: 1.5rem;
            font-weight: 500;
            color: #3f51b5;
            margin: 0px;
        }
    }
`;
