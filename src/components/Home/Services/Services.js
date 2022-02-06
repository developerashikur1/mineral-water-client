import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { indigo, lightBlue } from '@mui/material/colors';
import React from 'react';

const services = [
    {id:1, img:"https://i.ibb.co/KV7HQGB/service-6.jpg", name:"Residential Waters", description:"We supply residential water and its price depends on your family members and how much water you are using every month.", price: 35 },
    {id:2, img:"https://i.ibb.co/mJW5btz/service-5.jpg",  name:"Commercial Waters", description:"We now supply pure, fresh and healthy water for medical, industrial, commercial, and laboratory use.", price: 32 },
    {id:3, img:"https://i.ibb.co/KXwzN8Q/service-4.jpg",  name:"Filtration Plants", description:"Filtration plants machines are now selling at our company for your benefit and giving free service.", price: 40 },
    {id:4, img:"https://i.ibb.co/0jhM2fb/service-3.jpg",  name:"Free Water Delivery", description:"We are now giving you free water delivery. If you give us an order you don’t have any need to bother with the service money.", price: 30 },
    {id:5, img:"https://i.ibb.co/r6DGnQR/service-2.jpg",  name:"Water Softening", description:"Water has ions, calcium, magnesium and iron due to water softening we remove all these from the water since it is harmful.", price: 35 },
    {id:6, img:"https://i.ibb.co/09xdPRH/service-1.jpg",  name:"Coolers & Dispensers", description:"For your advantage of drinking safe, pure, healthy and fresh water we now started our new service coolers and dispensers.", price: 25 },
    ];       

const Services = () => {
    console.log(services)
    return (
        <>
         <Box sx={{ py:12}}>
            <Container>
            <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                    What we do
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:60, xs:30 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    Our Services
                    </Typography> 


                <Grid container spacing={3}>
                    {services.map(service=><Grid key={service?.id} item xs={12} md={4}>
                        <Card sx={{ textAlign:'center' }}>
                            <CardMedia
                                component="img"
                                height="260"
                                image={service?.img}
                                alt="green iguana"
                            />
                            <CardContent sx={{px:3, py:6}}>
                            <Typography fontWeight={900} sx={{ mb:2, fontSize :{md:24, xs:22 }, color:indigo[900]}} variant="h6"  gutterBottom component="div">
                                {service?.name}
                                </Typography> 
                                <Typography fontWeight={400} sx={{mb:2, fontSize :{md:16, xs:14 }, color:indigo[400]}} variant="h4"  gutterBottom component="div">
                                {service?.description}
                                </Typography> 

                                <Typography sx={{fontWeight:500, color:lightBlue[500], mb:4}} gutterBottom variant="h5" component="div">
                                    Start From  ${service?.price}
                                </Typography>
                                <Button sx={{mb:3}} variant="outlined">Order Now</Button>
                            </CardContent>
                        </Card> 
                    </Grid>)}
                </Grid>
            </Container>
         </Box>   
        </>
    );
};

export default Services;