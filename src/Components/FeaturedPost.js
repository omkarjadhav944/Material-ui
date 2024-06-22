import { Button, Card, CardActions, CardContent, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    title: {
        fontSize: 40,
        fontFamily: "Montserrat",
    },
    cover:{
        backgroundImage:`url(https://images.unsplash.com/photo-1705021246536-aecfad654893?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundPosition:"center",
        padding:"35px 25px",
    },

}) 
const FeaturedPost = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.cover}>
            <CardContent className= {classes.textContainer}>
                <Typography className= {classes.title} gutterBottom>
                    Title of a longer featured blog post
                </Typography>
                <Typography variant='h5' >Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='text' className= {classes.btn}>
                    READ MORE
                </Button>
            </CardActions>
        </Card> 
    )
}

export default FeaturedPost
