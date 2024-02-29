import FileInput from "@/components/FileInput";
import Footer from "@/components/Footer";
import { ButtonStyled } from "@/components/Style/ButtonStyled";
import { RegisterPageStyled } from "./RegisterPage.styed";
import { FormControlLabel, Grid, Paper, Stack, Switch, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

interface RegisterPageProps {
    register: ReturnType<typeof useForm>['register'];
    handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
    errors: ReturnType<typeof useForm>['formState']['errors'];
    isCitizenIdEnabled: boolean;
}

export default function RegisterPage({ register, handleSubmit, errors, isCitizenIdEnabled } : RegisterPageProps) {
    const navigate = useNavigate();

    return (
        <RegisterPageStyled className='Quantum_register-page'>
            <div className='Quantum_register-page-container'>
                <div className='Quantum_register-page-content'>
                    <Paper elevation={3} sx={{padding: '42px'}}>
                        <Stack sx={{marginBottom: '12px'}} direction='row' justifyContent='center'>
                            <p className='Quantum_register-page-title'>Create your account</p>  
                        </Stack>

                        <Grid container spacing={2} sx={{marginBottom: '24px'}}>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    {...register('username', {
                                        required: 'Name is required', 
                                    })}
                                    variant='outlined' 
                                    label='Name' 
                                    placeholder='Enter your name' 
                                    disabled={false}
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name?.message ? errors.name?.message.toString() : ''}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    {...register('email', {
                                        required: 'Email is required', 
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
                                    })}
                                    variant='outlined' 
                                    label='Email' 
                                    placeholder='Enter your email address' 
                                    disabled={false}
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message ? errors.email?.message.toString() : ''}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    {...register('password',{
                                        required: 'Password is required', 
                                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                        pattern: { 
                                            value: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
                                            message: 'Password too weak!' 
                                        }
                                    })}
                                    type='password'
                                    variant='outlined' 
                                    label='Password' 
                                    placeholder='Enter your password' 
                                    disabled={false}
                                    fullWidth
                                    error={!!errors.password}
                                    helperText={errors.password?.message ? errors.password?.message.toString() : ''}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    {...register('phoneNumber', {
                                        required: 'Phone number is required', 
                                        pattern: { value: /^\d{10,12}$/, message: 'Invalid phone number' } 
                                    })}
                                    variant='outlined' 
                                    label='Phone number' 
                                    placeholder='Enter your phone number' 
                                    disabled={false}
                                    fullWidth
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber?.message ? errors.phoneNumber?.message.toString() : ''}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    {...register('country', {
                                        required: 'Country is required', 
                                    })}
                                    placeholder='Enter your country'
                                    variant='outlined' 
                                    label='Country'
                                    type='text'
                                    disabled={false}
                                    fullWidth
                                    error={!!errors.country}
                                    helperText={errors.country?.message ? errors.country?.message.toString() : ''}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center'}}>
                                <FileInput />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch {...register('isCitizenIdEnabled')} />}
                                    label="Citizen ID/Passport number"
                                />

                                {isCitizenIdEnabled ? (
                                    <TextField
                                        {...register('citizenId')}
                                        variant="outlined"
                                        label="Citizen ID"
                                        placeholder="Enter your citizen id"
                                        disabled={false}
                                        fullWidth
                                        error={!!errors.citizenId}
                                        helperText={errors.citizenId?.message ? errors.citizenId?.message.toString() : ''}
                                    />
                                ) : (
                                    <TextField
                                        {...register('passportNumber')}
                                        variant="outlined"
                                        label="Passport number"
                                        placeholder="Enter your passport number"
                                        disabled={false}
                                        fullWidth
                                        error={!!errors.passportNumber}
                                        helperText={errors.passportNumber?.message ? errors.passportNumber?.message.toString() : ''}
                                    />
                                )}
                            </Grid>
                        </Grid>
                        <Stack direction='row' justifyContent='end' gap={2}>
                            <ButtonStyled
                                variant='outlined' 
                                size='large'
                                onClick={() => navigate('/')}>Cancel</ButtonStyled>

                            <ButtonStyled
                                variant='contained' 
                                size='large' 
                                onClick={handleSubmit}>Register</ButtonStyled>
                        </Stack>
                    </Paper>
                </div>
            </div>
            <Footer />
        </RegisterPageStyled>
    )
}