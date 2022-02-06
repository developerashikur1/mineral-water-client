import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { indigo, lightBlue } from '@mui/material/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../Hooks/useFirebase';
import styles from './Register.module.css';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
    
    // react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
     const {googleSignInMethod} =useFirebase()
    // const {googleSignInMethod} = 
    const handleGoogleButton = (e) =>{
        e.preventDefault();
        googleSignInMethod();
    }

    return (
        <>
            <Box sx={{my:16}}>
                <Container>
                <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                    What will you do
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:45, xs:32 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    Register Now
                    </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={0} md={4}>

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <form className={styles.reviewControlForm} onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='Your Name'{...register("userName")} />
                                    <input placeholder='Your Address'{...register("userAddress")} />
                                    <input placeholder='Your Email'{...register("userEmail")} />
                                    <input placeholder="Password" type="password" {...register("userPassword", { min: 1, max: 5 })} />
                                    <button className={styles.addReviewButton} type="submit">Register</button>
                                </form>
                                <Button className={styles.addReviewButton} sx={{width:'100%'}} onClick={handleGoogleButton}><GoogleIcon sx={{color:'orange', fontSize:32}}/> &nbsp; Google Sign In</Button>
                            </Grid>
                            <Grid item xs={0} md={4}>

                            </Grid>
                        </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Register;