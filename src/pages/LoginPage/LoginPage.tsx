import BrandName from '@/components/BrandName';
import Footer from '@/components/Footer';
import { ButtonStyled } from '@/components/Style/ButtonStyled';
import styled from '@emotion/styled';
import { Paper, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface LoginPageProps {
    register: ReturnType<typeof useForm>['register'];
    handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
    errors: ReturnType<typeof useForm>['formState']['errors'];
}

export default function LoginPage({register, handleSubmit, errors}: LoginPageProps) {

    return (
        <LoginPageStyled className='Quantum_login-page'>
            <div className='Quantum_login-page-container'>
                <div className='Quantum_login-page-content'>
                    <Paper elevation={3} sx={{padding: '42px'}}>
                        <Stack sx={{marginBottom: '24px'}} direction='row' justifyContent='center'>
                            <BrandName />
                        </Stack>

                        <Stack direction='column' gap='12px'>   
                            <TextField 
                                {...register('email', {
                                    required: 'Email is required', 
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
                                })}
                                variant='outlined' 
                                label='Email' 
                                placeholder='Enter you email' 
                                disabled={false}
                                fullWidth margin='normal'
                                error={!!errors.email}
                                helperText={errors?.email?.message ? errors.email?.message.toString() : ''} // Convert to string
                                required/>
                            <TextField 
                                {...register('password', { 
                                    required: 'Password is required',
                                })}
                                variant='outlined' 
                                label='Password'
                                type='password'
                                placeholder='Enter your password' 
                                disabled={false}
                                fullWidth margin='normal'
                                error={!!errors.password}
                                helperText={errors.password?.message?.toString()}
                                required/>
                            <ButtonStyled 
                                onClick={handleSubmit}
                                variant='contained' 
                                size='large' 
                                fullWidth>Login</ButtonStyled>
                        </Stack>
                    </Paper>
                </div>
            </div>
            <Footer />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
    &.Quantum_login-page {
        width: 100%;
        
        .Quantum_login-page-container {
            width: 100%;
            height: calc(100vh - 67px);
            display: flex;
            justify-content: center;
            align-items: center;

            .MuiInputBase-root {
                border-radius: 25px;
            }

            .Quantum_login-page-content {
                min-width: 390px;

                @media (max-width: 800px) {
                    .MuiPaper-root {
                        box-shadow: none;
                    }
                }
            }
        }
    }
`