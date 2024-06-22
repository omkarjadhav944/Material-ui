import { Grid, Link, Paper, Typography, makeStyles } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.SidebarAboutBox}>
        <Typography variant="h6" gutterBottom> {title} </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSecton}>Archives</Typography>
      {archives.map((archive) => (
        <Link display="block" variant="Body1" href={archive.url} key={archive.title}> {archive.title}</Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
