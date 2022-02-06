import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { blue, indigo, lightBlue } from '@mui/material/colors';

const mineralDetaills = [
    {id:1, title:'left', name:'Calcium+', subName:'5-12 mg/dm3', description:'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.'},
    {id:2, title:'left', name:'Magnesium', subName:'2-5 mg/dm3', description:'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.'},
    {id:3, title:'left', name:'Sodium', subName:'20-25 mg/dm3', description:'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.'},
    {id:4, title:'right', name:'Chlorine', subName:'~46 mg/dm3', description:'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.'},
    {id:5, title:'right', name:'Sourness', subName:'6,8-7,3', description:'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.'},
    {id:6, title:'right', name:'Mineralization', subName:'90-140 mg/dm3', description:'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.'},
]

const MineralComposition = () => {
    const [leftSide, setLeftSide] = useState([]);
    const [rightSide, setRightSide] = useState([]);
    useEffect(()=>{
        const left =(mineralDetaills.filter(details=>details.title.includes('left')));
        setLeftSide(left);
        const right =(mineralDetaills.filter(details=>details.title.includes('right')));
        setRightSide(right);
    },[]);
    return (
        <>
            <Box sx={{bgcolor:blue[50], py:12}}>
                <Container>
                    <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                    What inside
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:60, xs:30 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    Mineral composition
                    </Typography> 
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                                {leftSide.map(left=><Box key={left.id} sx={{mb:6, textAlign:{xs:'center', md:'left'}}}>
                                <Typography fontWeight={900} sx={{mb:-1, fontSize :{md:36, xs:30 }, color:indigo[900]}} variant="h4"  gutterBottom component="div">
                                {left.name}
                                </Typography> 
                                <Typography fontWeight={500} sx={{ mb:2, fontSize :{md:20, xs:18 }, color:lightBlue[500]}} variant="h6"  gutterBottom component="div">
                                {left.subName}
                                </Typography> 
                                <Typography fontWeight={400} sx={{ fontStyle:'italic', fontSize :{md:16, xs:14 }, color:indigo[400]}} variant="h4"  gutterBottom component="div">
                                {left.description}
                                </Typography> 
                                </Box>
                                )}
                        </Grid>

                        <Grid style={{background:`url('https://i.ibb.co/54C0btJ/mineral-elements-gray-2.png')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}} item sx={{textAlign:'left',  display:{xs:'none', md:'block'}}} xs={12} md={6}>
                            <img style={{height:'85%', width:'100%', marginTop:'2rem', marginRight:'0.5rem', marginLeft:'-0.5rem'}} src="https://i.ibb.co/sKcTTFS/mineral-glass-square.png" alt=""/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                        {rightSide.map(right=><Box key={right.id} sx={{mb:6, textAlign:{md:'right', xs:'center'}}}>
                                <Typography fontWeight={900} sx={{mb:-1, fontSize :{md:36, xs:30 }, color:indigo[900]}} variant="h4"  gutterBottom component="div">
                                {right.name}
                                </Typography> 
                                <Typography fontWeight={500} sx={{ mb:2, fontSize :{md:20, xs:18 }, color:lightBlue[500]}} variant="h6"  gutterBottom component="div">
                                {right.subName}
                                </Typography> 
                                <Typography fontWeight={400} sx={{ fontStyle:'italic', fontSize :{md:16, xs:14 }, color:indigo[400]}} variant="h4"  gutterBottom component="div">
                                {right.description}
                                </Typography> 
                                </Box>
                                )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default MineralComposition;