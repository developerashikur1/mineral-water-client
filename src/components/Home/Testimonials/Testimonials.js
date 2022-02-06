import { Box, Container, Typography } from '@mui/material';
import { indigo, lightBlue } from '@mui/material/colors';
import React from 'react';

const Testimonials = () => {
    return (
        <>
         <Box>
             <Container>
             <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                    What we do
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:60, xs:30 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    Our Services
                    </Typography> 


             </Container>
         </Box>   
        </>
    );
};

export default Testimonials;