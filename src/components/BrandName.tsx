import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function BrandName() {
    const navigate = useNavigate();

    return (
        <BrandNameStyled className='Quantum_brand-name' onClick={() => navigate('/')}>
            <span className='first-char'>QuantumSafe</span>
            <span className='second-char'>Bank</span>
        </BrandNameStyled>
    )
}

const BrandNameStyled = styled.h3`
    &.Quantum_brand-name {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0px;
        
        .first-char {
            color: #003087;
            margin-right: -4px;
        }

        .second-char {
            color: #0070e0;
        }

        :hover {
            cursor: pointer;
        }
    }
`
