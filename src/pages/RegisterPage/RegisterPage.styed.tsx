import styled from '@emotion/styled';

export const RegisterPageStyled = styled.div`
    &.Quantum_register-page {
        width: 100%;
        
        .Quantum_register-page-container {
            width: 100%;
            height: calc(100vh - 67px);
            display: flex;
            justify-content: center;
            align-items: center;

            .MuiInputBase-root {
                border-radius: 25px;
            }

            .Quantum_register-page-content {
                min-width: 800px;
                max-width: 1200px;

                @media (max-width: 800px) {
                    max-width: 100%;
                    min-width: 390px;

                    .MuiPaper-root {
                        box-shadow: none;
                    }
                }
            }
        }

        .Quantum_register-page-title {
            font-size: 2.5rem;
            font-weight: 600;
            margin: 0px 0px 24px 0px;
            color: #003087;

            @media (max-width: 800px) {
                font-size: 2rem;
                font-weight: 400;
            }
        }
    }


`;