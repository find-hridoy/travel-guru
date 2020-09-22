import { Container, Grid } from '@material-ui/core';
import React from 'react';
import DarkHeader from '../DarkHeader/DarkHeader';
import HotelDetails from '../HotelDetails/HotelDetails';
import Map from '../Map/Map';
import './HotelInformation.css';

const HotelInformation = () => {
    return (
        <>
            <DarkHeader />
            <Container>
                <hr />
                <p className="hotel-stay-date">252 stays Apr 13-17 3 guests</p>
                <p className="hotel-stay">Stay in Cox’s Bazar</p>
                <Grid
                    container spacing={5}>
                    <Grid item xs={7} >
                        <HotelDetails />
                    </Grid>
                    <Grid item xs={5}>
                        <Map />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default HotelInformation;