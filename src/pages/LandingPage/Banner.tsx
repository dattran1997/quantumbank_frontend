import styled from '@emotion/styled';
import BannerImg from '@/assets/images/banner.jpg';

export default function Banner() {
    return (
        <BannerStyled className='Quantum_banner'>
            <img src={BannerImg} alt="Banner" />
            <div className='Quantum_banner-content'>
                <p className='first-line'>Secure you account</p>
                <p className='second-line'>Make your transactions easy, fast & secure</p>
            </div>
        </BannerStyled>
    )
}

const BannerStyled = styled.div`
    &.Quantum_banner {
        width: 100%;
        height: 600px;
        position: relative;
        display: flex;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            z-index: -1;
        }

        .Quantum_banner-content {
            padding-left: 32px;
            max-width: 550px;

            p {
                font-size: 3rem;
                color: white;
                font-weight: 500;
                margin: 0px;
                line-height: 74px;
            }

            .second-line {
                line-height: 48px;
                font-size: 2.5rem;
            }
        }
    }
`;