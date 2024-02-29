import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import InfoItem from './InfoItem';
import NoFeeIcon from '@/assets/icons/no-fee.svg';
import CreditCardIcon from '@/assets/icons/credit-card.svg';
import BuyerProtectionIcon from '@/assets/icons/buyer-protection.svg';

export default function InfoContainer() {
    return (
        <InfoContainerStyled className='Quantum_info-container'>
            <h3 className='Quantum_info-title'>Pay with peace of mind</h3>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <InfoItem 
                        icon={NoFeeIcon} 
                        title='No Hidden Fees' 
                        description="you'll only be charged a fee when you sell something or request a payment."/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <InfoItem 
                        icon={CreditCardIcon} 
                        title='Fast Payments' 
                        description='With some simple steps, you can easily make your transaction.'/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <InfoItem 
                        icon={BuyerProtectionIcon} 
                        title='Always Protected' 
                        description='24/7 anti-fraud monitoring and world class security.'/>
                </Grid>
            </Grid>
        </InfoContainerStyled>
    )
}

const InfoContainerStyled = styled.div`
    &.Quantum_info-container {
        max-width: 1200px;
        min-height: 300px;
        margin: 0 auto;
        padding: 64px 32px;

        .Quantum_info-title {
            font-size: 2.5rem;
            font-weight: 300;
            margin: 0px 0px 48px 0px;
            text-align: center;
            color: #003087;
        }
    }
`