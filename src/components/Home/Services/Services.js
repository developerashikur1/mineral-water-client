import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { indigo, lightBlue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';


const Services = () => {
    
    const [services, setServices] = useState([]);

    useEffect(()=>{
        const uri = 'http://localhost:5000/water_service';
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])



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
                    {services.map(service=><Grid key={service?._id} item xs={12} md={4}>
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