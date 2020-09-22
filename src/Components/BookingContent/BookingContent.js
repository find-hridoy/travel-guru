import { Button, ButtonBase, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import bookingData from '../../FakeData/bookingData';
import BookingForm from '../BookingForm/BookingForm';

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
        paddingTop: '20px',
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

const BookingContent = () => {
    const classes = useStyles();
    const { placeTitle } = useParams();
    const place = bookingData.find(plc => placeTitle === plc.title);
    // console.log(place.title);
    return (
        <div>
            <Container>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container direction="row" justify="space-between">
                            <Grid item xs={6}>
                                <Typography gutterBottom className={classes.title}>
                                    {place.title}
                                </Typography>
                                <Typography gutterBottom className={classes.description}>
                                    {place.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <BookingForm />
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default BookingContent;