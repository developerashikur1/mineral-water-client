import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { lightBlue, indigo } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import styles from './Home.module.css';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <Box id="index-home" className={styles.HomeMain}>
            <Container>
                <Grid sx={{display:'flex', alignItems:'center'}} container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{mb:6}}>
                            <Typography fontWeight={900} sx={{fontSize :{md:60, xs:30 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                                <span style={{color:indigo[900], display:'block'}}>Natural Water</span> Delivery Service
                            </Typography> 
                            <Typography fontWeight={400} sx={{fontSize :{md:18, xs:16 }, color:indigo[400]}} variant="subtitle1"  gutterBottom component="div">
                            Our delivery service employs more than 100 professional couriers. We will deliver water to your home for 1 hour to anywhere in the city.
                            </Typography> 
                       </Box>
                       <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={9}>
                                    <Paper sx={{backgroundColor:'#FFFFFF !important',borderRadius: 6 , px:{xs:4, md:6}, pt:2, pb:5, textAlign:'center'}} elevation={3} >
                                        
                                        <Typography fontWeight={600} sx={{fontSize :{md:24, xs:30 }, mb:5, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                                        Please, fill delivery form
                                        </Typography> 


                                        {/* Delivery Request Form */}
                                        <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
                                                <input placeholder='Name' type="name" {...register("firstName", { required: true, maxLength: 20 })} />
                                                <input placeholder='Phone' type="phone" {...register("phone")} />
                                                <input placeholder='Address' type="address" {...register("address")} />
                                                <input placeholder='Number of Bottles' type="number" {...register("number", { min: 1, max: 99 })} />
                                            <Button type="submit">Make Order</Button>
                                        </form>
                                    </Paper>
                                </Grid>
                                <Grid item xs={0} md={3}>

                                </Grid>
                            </Grid>                                    
                       </Box>
                    </Grid>


                    <Grid sx={{ display:{xs:'none', md:'block'}}} item xs={12} md={6}>
                        <img
                        style={{width: '100%'}}
                        src="https://i.ibb.co/cD8Xfhn/slider-2-image.png"
                        alt="/"
                        title="/"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
       </>
    );
};

export default Home;