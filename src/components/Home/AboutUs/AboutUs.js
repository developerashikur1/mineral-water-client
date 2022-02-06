import { Box, Container, Grid, Slide, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutUs.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { indigo, lightBlue } from '@mui/material/colors';

const aboutData = [
    {nav:"Company Mission", subTitle:"Touching Lives Through Technology", title:"Fingent's Four Pillers Of Influence", description:"We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.", img:"https://i.ibb.co/x8MDB7T/h2-banner1-600x473.jpg"},
    {nav:"Awards Winner", subTitle:"Insight Stands Out", title:"Share Your Hunger, Heart And Harmony.", description:"We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.", img:"https://i.ibb.co/Pmw2xFC/h3-banner1-600x473.jpg"},
    {nav:"Using Softwares", subTitle:"Indule your curiosity.", title:"An Award-Winning Company.", description:"We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.", img:"https://i.ibb.co/TtthKc5/service7-600x473.jpg"},
    ];
    



const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState({});
    const [checked, setChecked] = useState(true);
    const containerRef = useRef(null);

    useEffect(()=>{
        setAboutUs(aboutData[0])
    },[])

    const nestedButton = event =>{
        if(aboutData[event]){
            setAboutUs(aboutData[event])
        }
        setChecked(false)
        setTimeout(() => {setChecked(true)}, 300);
    }
    
    
    // useEffect(()=>{
    // },[])

    return (
        <>

        <Box className={styles.mainSection}>
            <Container>
                <Box style={{textAlign:'center', marginBottom:'3rem'}}>
                <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue
                [500]}} variant="h2"  gutterBottom component="div">
                    Who we are
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:60, xs:30 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    About us
                    </Typography> 
                </Box>

                <Grid className={styles.nestedMenu} container spacing={0}>
                    <Grid style={{textAlign:'right'}} item md={4} xs={6}>
                        <button onClick={()=>nestedButton(0)} className={styles.nestedMenuButton}>Company Mission</button>
                    </Grid>
                    <Grid style={{textAlign:'center'}} item md={4} xs={6}>
                        <button onClick={()=>nestedButton(1)}  className={styles.nestedMenuButton}>Awards Winner</button>
                    </Grid>
                    <Grid className={styles.thirdButton} item md={4} xs={12}>
                        <button onClick={()=>nestedButton(2)}  className={styles.nestedMenuButton}> Using Softwares</button>
                    </Grid>
                </Grid>

                <Slide direction="up" in={checked} container={containerRef.current}>
        
                <Grid  sx={{my:10}} container rowGap={3} spacing={0}>
                    <Grid item md={6} xs={12}>
                       <img className={styles.aboutImg} src={aboutUs.img} alt=""/>
                    </Grid>

                    <Grid className={styles.aboutUsSideGap} item md={6} xs={12}>
                        <Typography fontWeight={600} sx={{fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h6" className={styles.reviewerPositionName} gutterBottom component="div"> {aboutUs.subTitle}
                        </Typography>

                        <Typography  fontWeight={900} sx={{ mb:6, fontSize :{md:42, xs:24 }, color:indigo[900]}} className={styles.title} gutterBottom component="div">
                           {aboutUs.title}
                        </Typography>

                        <Typography className={styles.text} variant="body1" gutterBottom component="div">
                       {aboutUs.description}
                        </Typography>
                        <br/><br/> 

                        <button className={styles.viewMoreButton}>
                            About Us &nbsp; <ArrowRightAltIcon/>
                        </button>
                    </Grid>
                </Grid>

                </Slide>
                
            </Container>    
        </Box>
        </>
    );
};

export default AboutUs;     <h2>This is about us</h2>