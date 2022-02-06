import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ListItemText from '@mui/material/ListItemText';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import './AdminDashboard.css';


const drawerWidth = 240;

const AdminDashboard = (props) => {
    const [subName, setSubName] = useState('')
    const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <List className='dashboardLink'>
            <Link onClick={() => setSubName('Banner Control')} to="bannercontroladmin">
                <ListItem button>
                    <ListItemIcon>
                        <ViewCarouselIcon/>
                    </ListItemIcon>
                    <ListItemText primary={`Banner Control`}/>
                </ListItem>
            </Link>
            <Link onClick={() => setSubName('Review Control')} to="reviewcontroladmin">
                <ListItem button>
                    <ListItemIcon>
                        <ReviewsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={`Review Control`}/>
                </ListItem>
            </Link>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'#4E30E4'
                    }}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Dashboard {`${subName && '/'} ${subName}`}
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, pt:12, pb:4, pl:4, pr:4, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >


                    {/* 
                    
                    
                        We need to place hare all inputs with their routes of dashboard

                     */}
                    <Outlet/>

                </Box>
            </Box>
        </div>
    );
};

export default AdminDashboard;