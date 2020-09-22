import { Button, Card, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import './BookingForm.css';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 370,
        height: 330,
        padding: '30px 25px',
    }
}));

const BookingForm = () => {
    const classes = useStyles();

    const history = useHistory();
    const handleSubmit = () => {
        history.push('/signup')
    }
    return (
        <Card className={classes.root}>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="">Origin</label><br />
                <input type="text" required /> <br />
                <label htmlFor="">Destination</label> <br />
                <input type="text" required /> <br />
                <Grid container
                    direction="row"
                    justify="space-between" spacing={1}>
                    <Grid item xs={6}>
                        <label htmlFor="">Form</label> <br />
                        <input type="date" required />
                    </Grid>
                    <Grid item xs={6}>
                        <label htmlFor="">To</label> <br />
                        <input type="date" required />
                    </Grid>
                </Grid>
                <Button className="start-booking-btn" variant="contained" type="submit">
                    Start Booking
                </Button>
            </form>
        </Card>
    );
};

export default BookingForm;