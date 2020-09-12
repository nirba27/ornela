import React, { useState }  from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import tileData from './tileData';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Logo from './tileData/1.jpg';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '70px',
        boxShadow: "none",
        fontFamily:"'Sacramento', cursive;"
    },
    gridList: {
        width: '100%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    gridListTile: {
        overflow: 'hidden',
        display: 'inline-block'
    },
    img: {
        alignItems:'center',
        overflow: 'hidden',
        display: 'inline-block',
        transition: 'all 0.5s ease',
        marginLeft: 'auto',
        marginRight: 'auto',
        '&:hover': {
            transform: 'scale(1.05)'
        },

    },
    appbar: {
        backgroundColor: "transparent",
        fontSize:"8px",
        fontColor:"black",
        alignItems:"center",
        boxShadow: "none",
        paddingBottom:"50px",
        fontFamily:"'Kumbh Sans', sans-serif;"
    },
    button: {
        fontFamily:"'Kumbh Sans', sans-serif;"
    },
    grida: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '30px',
        boxShadow: "none",
        fontFamily:"'Kumbh Sans', sans-serif;"
    },
    text: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '15px',
        boxShadow: "none",
        fontFamily:"'Kumbh Sans', sans-serif;",
        spacing: '2'
    }
}));

function App() {
    const [view, setView] = useState([1,0,0]);

    const handleClick = (home,about,contact) => {
        setView([home,about,contact])
    }

    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Container maxWidth="md">
              <Grid container spacing={3}>
                  <Grid item xs={12} style={{paddingTop:'10px',boxShadow: "none"}}>
                      <Paper className={classes.paper}>Ornale</Paper>
                  </Grid>
              </Grid>
              <Divider light />
              <Grid container spacing={3}>
                  <AppBar position="static" className={classes.appbar}>
                  <Toolbar>
                      <Button className={classes.button} onClick={() => handleClick(1,0,0)}>Home</Button>
                      <Button className={classes.button} onClick={() => handleClick(0,1,0)}>About</Button>
                      <Button className={classes.button} onClick={() => handleClick(0,0,1)}>Contact</Button>
                  </Toolbar>
                  </AppBar>
              </Grid></Container>
              { view[0] ? <Container maxWidth="md">
                      <Grid container spacing={1}>
                  <Grid item xs={12} style={{boxShadow: "none"}}>
                      <Paper className={classes.grida}>Illustrator</Paper>
                  </Grid>
              </Grid>
              <Grid container spacing={3} >
              <GridList spacing={20} cellHeight={400} className={classes.gridList} cols={2}>
                      {tileData.map((tile) => (
                          <GridListTile className={classes.img} key={tile.img} cols={tile.cols || 1}>
                              <img  src={tile.img} alt={tile.title} />
                          </GridListTile>
                      ))}
                  </GridList>
              </Grid>  </Container>
                  : <div/> }
          { view[1] ? <Container maxWidth="sm">
          <Grid container spacing={3} >
              <img className={classes.img} height='400' widht='200' align='center' src={Logo} alt='logo'/>
              <Grid container spacing={1}>
                  <Grid item xs={12} style={{boxShadow: "none"}}>
                      <Paper className={classes.grida}>About me</Paper>
                  </Grid>
              </Grid>
              <div className={classes.text}>{"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."}</div>
          </Grid>
          </Container> : <div/> }
          <Container style={{paddingTop:'50px'}} >
              <Copyright />
          </Container>
      </div> );


}

export default App;
