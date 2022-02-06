import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { indigo, lime, blue} from '@mui/material/colors';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
          <Box sx={{bgcolor:blue[900]}}>
            <Container>
                <Grid container sx={{textAlign:'center', pt:20, pb:8}} spacing={2}>
                    <Grid item xs={0} md={3}>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100px'}} src="https://i.ibb.co/NtFcKD4/label-free.png" alt="" />
                        <Typography fontWeight={400} sx={{fontSize :{md:16, xs:14 }, color:lime[50]}} variant="h4"  gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus tristique ligula quis orci malesuada tincidunt.
                        </Typography> 

                        <Box>
                            <Link to="/"><TwitterIcon sx={{fontSize:30, bgcolor:'white', p:1.5, borderRadius: '50%', color:indigo[900], mr:2}}/></Link>
                            <Link to="/"><FacebookRoundedIcon  sx={{fontSize:30, bgcolor:'white', p:1.5, borderRadius: '50%', color:indigo[900], mr:2}}/></Link>
                            <Link to="/"><InstagramIcon  sx={{fontSize:30, bgcolor:'white', p:1.5, borderRadius: '50%', color:indigo[900], mr:2}}/></Link>
                            <Link to="/"><GoogleIcon  sx={{fontSize:30, bgcolor:'white', p:1.5, borderRadius: '50%', color:indigo[900], mr:2}}/></Link>
                        </Box>
                    </Grid>

                    <Grid item xs={0} md={3}>
                    </Grid>
                </Grid>
            </Container>
          </Box>  
          <Box sx={{bgcolor:indigo[900], py:4}}>
                <Typography fontWeight={400} sx={{textAlign:'center' , fontSize :{md:16, xs:14 }, color:lime[50]}} variant="h4"  gutterBottom component="div">
                        © All Rights Reserved - 2022 - Ashikur Rahman
                </Typography> 
          </Box>
        </>
    );
};

export default Footer;

// https://i.ibb.co/x3bHZpK/go-top.png