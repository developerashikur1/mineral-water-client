import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { indigo, lightBlue } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

const gallerys = [
    {id:1, name:"Why do we need to drink water?", img:"https://i.ibb.co/2nNyCyT/blog01.jpg"},
    {id:2, name:"How much water should we drink?", img:"https://i.ibb.co/KLm7BNV/blog02.jpg"},
    {id:3, name:"Fast facts on drinking water", img:"https://i.ibb.co/y6xfJn5/blog03.jpg"},
    {id:4, name:"Carbonated (Sparkling) Water: Good or Bad?", img:"https://i.ibb.co/r4S21Q5/blog04.jpg"},
    {id:5, name:"How Drinking More Water Can Help You Lose Weight", img:"https://i.ibb.co/VwjLgrX/blog05.jpg"},
    {id:6, name:"How many bathrooms are in your home?", img:"https://i.ibb.co/dKJxyxv/blog06.jpg"}
    ];

const Gallery = () => {
    return (
        <>
         <Box sx={{my:12}}>
            <Container>
            <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                    What we provides
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:60, xs:30 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    Gallery
                    </Typography> 


            <Grid container spacing={3}>
                    {gallerys.map(gallery=><Grid key={gallery?.id} item xs={12} md={4}>
                        <Card>
                            <Link to="/">
                            <CardMedia
                                component="img"
                                height="260"
                                image={gallery?.img}
                                alt="green iguana"
                            />
                            </Link>
                            <CardContent sx={{px:3, py:6}}>
                            <Typography fontWeight={900} sx={{ mb:2, fontSize :{md:24, xs:22 }, color:indigo[900]}} variant="h6"  gutterBottom component="div">
                                {gallery?.name}
                                </Typography> 
                            </CardContent>
                        </Card> 
                    </Grid>)}
                </Grid>
            </Container>
         </Box>   
        </>
    );
};

export default Gallery;