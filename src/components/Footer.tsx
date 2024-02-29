import styled from "@emotion/styled";

export default function Footer() {
    return (
        <FooterStyled className='Quantum_footer-container'>
            <p>© 2024 QuantumSafe Bank, LLC.</p>
            <div className='Quantum_footer-container-sub-content'>
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    &.Quantum_footer-container {
        width: 100%;
        min-height: 40px;
        max-height: 67px;
        padding: 5px 20px;
        font-family: sans-serif;
        border-top: 1px solid #e0e0e0;
        color: #666666;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .Quantum_footer-container-sub-content {
            display: flex;
            gap: 16px;

            span {
                font-size: 0.8rem;
                cursor: pointer;
            }
        }
    }
`