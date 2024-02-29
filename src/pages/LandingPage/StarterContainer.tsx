import { ButtonStyled } from "@/components/Style/ButtonStyled";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function StaterContainer() {
    const navigate = useNavigate();

    return (
        <StaterContainerStyled className='Quantum_stater-container'>
            <h3 className='Quantum_stater-container-title'>Start with us now!</h3>
            <ButtonStyled onClick={() => navigate('/register')} variant='contained' color='primary' size='large'>Sign up now</ButtonStyled>
        </StaterContainerStyled>
    )
}

const StaterContainerStyled = styled.div`
    &.Quantum_stater-container {
        min-height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        background-color: #f5f5f5;

        .Quantum_stater-container-title {
            font-size: 2.5rem;
            font-weight: 300;
            margin: 0px;
        }
    }
`;