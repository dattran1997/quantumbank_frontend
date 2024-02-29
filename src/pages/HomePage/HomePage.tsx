import Header from '@/components/Header';
import TransferModalContainer from '@/components/TransferModal/TransferModal.container';
import { IRootState } from '@/redux/reducers';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const show = useSelector((state: IRootState) => state.transferModal.show);

    const checkActivePath = (path: string) => {
        if (location.pathname === path) {
            return 'active';
        }
            return '';
    };

    return (
        <HomePageStyled className='Quantum_home-page'>
            <Header />
            <div className='Quantum_home-page-container'>
                <SideBar className='Quantum_side-bar'>
                    <Button
                        className={checkActivePath('/home')} 
                        onClick={() => navigate('/home')} 
                        fullWidth>Home</Button>
                    <Button 
                        className={checkActivePath('/home/transfer')} 
                        onClick={() => navigate('/home/transfer')} 
                        fullWidth>Transfer</Button>
                </SideBar>
                <div className='Quantum_home-page-content-container'>
                    <Outlet />
                </div>
            </div>

            {show && <TransferModalContainer />}
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    &.Quantum_home-page {

        .Quantum_home-page-container {
            min-height: calc(100vh - 57.5px);
            display: flex;
            
            .Quantum_home-page-content-container {
                padding: 24px;
                width: calc(100% - 250px);
            }
        }

    }
`;

const SideBar = styled.div`
    &.Quantum_side-bar {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 24px 5px;
        min-height: calc(100vh - 57.5px);
        width: 250px;
        border-right: 1px solid #e0e0e0;

        .MuiButtonBase-root.active {
            background-color: #0070e0;
            color: white;
        }
    }
`