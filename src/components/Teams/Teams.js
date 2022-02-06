import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Teams.module.css';
import { indigo, lightBlue, pink } from '@mui/material/colors';



const Teams = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(()=>{
        const uri = 'https://lit-woodland-72360.herokuapp.com/teams';
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setTeamMembers(data))
    },[])
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
                    
                    { teamMembers.map(member=><Grid key={member?._id} item xs={12} md={4}>
                    
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