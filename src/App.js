import './App.css';
import { Container, Grid, ThemeProvider, createTheme, makeStyles, } from '@material-ui/core';
import Header from './Components/Header';
import FeaturedPost from './Components/FeaturedPost';
import { featuredPosts, sidebar } from './Data/Data';
import PostCard from './Components/PostCard';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

const useStyles = makeStyles((theme)=>({
  mainGrid:{
    marginTop: theme.spacing(3),
  },
}));



function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header/>
          <FeaturedPost/>
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <PostCard post={post} key={post.title}/>
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title='From the firehose'/>
            <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social}
            />
          </Grid>
        </Container>
          <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;

