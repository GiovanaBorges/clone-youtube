import React from 'react';
import {makeStyles, AppBar,Toolbar,IconButton,Button,ListItem
    ,ListItemText,ListItemIcon,Typography,Drawer,Divider,List, Icon}
 from '@material-ui/core';
 
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';

import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        background : theme.palette.content.main,
        height : '100vh',
        
    },
    logo:{
        height: '25px'
    },
    drawer: {
        width: 240,
        
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
        background : theme.palette.content.main,
        borderRight: 'none'
    },
    icons: {
        paddingRight: theme.spacing(2)
    },
    menuIcon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(2)
    },
    topBar : {
        background : theme.palette.secondary.main,
        boxShadow : 'none',
        zIndex: theme.zIndex.drawer +1,
    },
    grow:{
        flexGrow : 1
    },ListItemText:{
        fontSize : 14,
        color : theme.palette.white.main,
    },
  }));

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.topBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon /> 
                    </IconButton>
                    <img src="./images/branco.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />

                    <IconButton className={classes.icons} color="inherit" >
                        <VideoCallIcon /> 
                    </IconButton>
                    <IconButton  className={classes.icons} color="inherit" >
                        <AppsIcon /> 
                    </IconButton>
                    <IconButton  className={classes.icons} color="inherit" >
                        <NotificationsIcon /> 
                    </IconButton>

                    <Button color="primary" variant="outlined" startIcon={<AccountCircleRounded />}> fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
        <Toolbar />
        
        <div className={classes.drawerContainer}>
          <List >
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon > (<HomeIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Ínicio'} />
                </ListItem>
            
            <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon > (<WhatshotIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Em alta'} />
                </ListItem>
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon> (<SubscriptionsIcon/>)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Inscrições'} />
                </ListItem>
              </List>
          <Divider />
          <List >
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon > (<VideoLibraryIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Biblioteca'} />
                </ListItem>
            
            <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon > (<HistoryIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Histórico'} />
                </ListItem>
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon> (<PlayCircleOutlineIcon/>)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Seus Vídeos'} />
                </ListItem>
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon> (<LocalMoviesIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Seus filmes'} />
                </ListItem>
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon> (<ScheduleIcon/>)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Assistir mais tarde'} />
                </ListItem>
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon> (<ExpandMoreIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Mostrar mais '} />
                </ListItem>
            
            <Divider />
            <ListItem button classes={{root : classes.ListItem}}>
                <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Inscrições'} />
                </ListItem>
                <ListItem button classes={{root : classes.ListItem}}>
                    <ListItemIcon> (<ExpandMoreIcon />)</ListItemIcon>
                    <ListItemText classes={{
                        primary : classes.ListItemText,
                    }} primary={'Mostrar mais canais'} />
                </ListItem>
            </List>
        </div>
      </Drawer>
    </div>
    )
}

export default Home;
