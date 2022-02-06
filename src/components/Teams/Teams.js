import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Teams.module.css';
import { indigo, lightBlue, pink } from '@mui/material/colors';

const teamMembers = [
    {id:1, name:"Max Peterson", img:"https://i.ibb.co/0KDK5ZB/image-37.jpg", position:"Chief Operating", twitter:"/https://www.wesoftin.com", facebook:"/https://www.wesoftin.com", linkedin:"https://www.wesoftin.com"},
    {id:2, name:"John Doe", img:"https://i.ibb.co/Hnnmc0k/image-36.jpg", position:"CEO of Company", twitter:"/https://www.wesoftin.com", facebook:"/https://www.wesoftin.com", linkedin:"https://www.wesoftin.com"},
    {id:3, name:"FABIAN BARRIE", img:"https://i.ibb.co/hmZjWqT/image-35.jpg", position:"Design Expert", twitter:"/https://www.wesoftin.com", facebook:"/https://www.wesoftin.com", linkedin:"https://www.wesoftin.com"},
    {id:4, name:"Jonathon smith", img:"https://i.ibb.co/hBqpR2x/image-34.jpg", position:"Marketing Advisor", twitter:"/https://www.wesoftin.com", facebook:"/https://www.wesoftin.com", linkedin:"https://www.wesoftin.com"},
    {id:5, name:"Luke nobert", img:"https://i.ibb.co/DVg6J9M/image-32.jpg", position:"Technologist-specialist", twitter:"/https://www.wesoftin.com", facebook:"/https://www.wesoftin.com", linkedin:"https://www.wesoftin.com"},
    {id:6, name:"Amelia isabella", img:"https://i.ibb.co/bNQJ4xd/image-33.jpg", position:"Industrialist", twitter:"/https://www.wesoftin.com", facebook:"/https://www.wesoftin.com", linkedin:"https://www.wesoftin.com"},
];


const Teams = () => {
    return (
        <>
         <Box sx={{my:12}}>
                <Container>
                <Typography fontWeight={600} sx={{textAlign:'center', fontSize :{md:18, xs:16 }, color:lightBlue[500]}} variant="h2"  gutterBottom component="div">
                    Who we are
                    </Typography> 
                    <Typography fontWeight={900} sx={{textAlign:'center', mb:6, fontSize :{md:60, xs:30 }, color:indigo[900]}} variant="h2"  gutterBottom component="div">
                    Our Team
                    </Typography> 

                <Grid container className={styles.cardManager} spacing={2}>
                    
                    { teamMembers.map(member=><Grid key={member?.id} item xs={12} md={4}>
                    
                        <Card className={styles.teamMemberCard} style={{textAlign:'center', padding:'1.5rem .5rem'}}>
                            <Box>
                            <img
                            className={styles.memberImg}
                            src={member?.img}
                            alt=""
                            />

                            </Box>
                            <CardContent>
                            <Typography sx={{fontWeight:600,  color:indigo[900], mt:1}} gutterBottom variant="h5" component="div">
                                {member?.name}
                            </Typography>
                            <Typography sx={{fontWeight:600, fontSize:16, mt:-1}} gutterBottom variant="h6" component="div">
                                {member?.position}
                            </Typography>
                            <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Link to={member?.twitter}><TwitterIcon sx={{ color: pink[500], mr:1.5, }}/></Link>
                                <Link to={member?.facebook}><FacebookIcon sx={{ color: pink[500], mr:1.5 }}/></Link>
                                <Link to={member?.linkedin}><LinkedInIcon sx={{ color: pink[500], mr:1.5 }}/></Link>
                            </Box>
                            </CardContent>
                        </Card>
                    </Grid>)}
                </Grid>
                </Container>
         </Box>   
        </>
    );
};

export default Teams;