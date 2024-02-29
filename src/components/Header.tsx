import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { ButtonStyled } from "./Style/ButtonStyled";
import { useLocation, useNavigate } from "react-router-dom";
import BrandName from "./BrandName";
import { isAuthenticated } from "@/utils/auth";
import { signOut } from "@/utils/signOut";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuth = isAuthenticated();
    const isHomePath = location.pathname.includes('/home');
    const username = JSON.parse(sessionStorage.getItem('user') || '{}')?.username;

    const onSignOut = () => {
        signOut();
        navigate('/login');
    }

    return (
        <HeaderStyled className='Quantum_header-container'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <BrandName />

                <Stack direction='row' gap='8px'>
                    {isAuth && isHomePath ? (<Stack flexDirection='row' gap={2} alignItems='center'>
                        <span className='Quantum_header-username'>Hi! {username}</span>
                        <ButtonStyled 
                        onClick={onSignOut} 
                        variant='contained' 
                        color='primary'>Sign out</ButtonStyled>
                    </Stack>) : (<>
                        <ButtonStyled 
                            onClick={() => navigate('/register')} 
                            variant='outlined' 
                            color='primary'>Sign Up</ButtonStyled>
                        <ButtonStyled 
                            onClick={() => navigate('/login')} 
                            variant='contained' 
                            color='primary'>Login</ButtonStyled>
                    </>)}
                </Stack>
            </Stack>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    &.Quantum_header-container {
        width: 100%;
        max-height: 60px;
        padding: 10px 20px;
        font-family: sans-serif;
        border-bottom: 1px solid #e0e0e0; 

        .Quantum_header-username {
            font-size: 1rem;
            color: #0070e0;
            text-transform: capitalize;
        }
    }
`;

