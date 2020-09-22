import { Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import homeData from '../../FakeData/homeData';
import './Banner.css';
import { Link } from "react-router-dom";
// import Booking from './Components/Booking/Booking';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'white',
    },
    image: {
        width: 250,

    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
    },
    title: {
        paddingTop: '40px',
        marginBottom: 0,
        fontSize: '97px',
        fontFamily: "'Bebas Neue', cursive",
    },
    description: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '16px',
        marginTop: '-20px',
    },
    bookingBtn: {
        backgroundColor: '#F9A51A',
        borderRadius: '5px',
        fontWeight: 600,
        boxShadow: 'none',
        marginTop: '40px',
        padding: "12px 29px",
        "&:hover": {
            backgroundColor: '#fa9a00',
        }
    },
}));

const Banner = () => {
    const [items, setItems] = useState(homeData);
    const classes = useStyles();
    return (
        <>
            <Slider>
                {items.map((item, id) =>
                    <div key={id}>
                        <Container>
                            <div className={classes.root}>
                                <Paper className={classes.paper}>
                                    <Grid container direction="row" justify="space-between">
                                        <Grid item xs={5}>
                                            <Typography gutterBottom className={classes.title}>
                                                {item.title}
                                            </Typography>
                                            <Typography gutterBottom className={classes.description}>
                                                {item.description}
                                            </Typography>
                                            <Link className="button-item" to={`/place/${item.title}`}><Button className={classes.bookingBtn} variant="contained">
                                                Booking <ArrowForwardIcon />
                                            </Button></Link>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Link className="button-item" to={`/place/${item.title}`}><ButtonBase className={classes.image}>
                                                <img className={classes.img} alt="complex" src={item.imgUrl} />
                                            </ButtonBase></Link>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                        </Container>
                    </div>
                )}
            </Slider>
        </>
    );
};

export default Banner;