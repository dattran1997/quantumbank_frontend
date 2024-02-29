import styled from "@emotion/styled";

interface InfoItemProps {
    icon: string;
    title: string;
    description: string;
}

export default function InfoItem({icon, title, description}: InfoItemProps) {
    return (
        <InfoItemStyled className='Quantum_info-item'>
            <img src={icon} alt='info-icon' />
            <div className='Quantum_info-item-title'>{title}</div>
            <div className='Quantum_info-item-description'>{description}</div>
        </InfoItemStyled>
    )
}

const InfoItemStyled = styled.div`
    &.Quantum_info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px #0000001f;
    
        img {
            width: 50px;
            height: 50px;
        }

        .Quantum_info-item-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 16px 0px 2px 0px;
        }

        .Quantum_info-item-description {
            font-size: 1rem;
            text-align: center;
        }
    }
`;