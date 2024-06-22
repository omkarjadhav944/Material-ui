import { Divider, IconButton, Toolbar, Typography, Badge, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'
import SideDrawer from './SideDrawer';


const useStyles = makeStyles((theme)=>({
    title:{
flexGrow:1,
    },
    tagline:{
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:"center",
        fontFamily:"Montserrat",
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <><Toolbar>
            <SideDrawer><IconButton color='inherit' ><MenuIcon/></IconButton></SideDrawer>
            <Typography variant='h6' className={classes.title}>Blooging Website</Typography>
            <IconButton><Badge badgeContent={3} color="Secondary"><NotificationsIcon/></Badge></IconButton>
            <IconButton><AccountCircleIcon/></IconButton>
        </Toolbar>
            <Divider/>
            <Toolbar className= {classes.tagline}>Title of a longer featured blog post</Toolbar>
        </>
    )
}

export default Header
