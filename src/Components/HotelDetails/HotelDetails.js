import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import hotelData from '../../FakeData/hotelData';
import './HotelDetails.css';
import icon from '../../Icon/star_1_.png';

const HotelDetails = () => {
    const [details, setDetails] = useState(hotelData);
    return (
        <div>
            {
                details.map(hd =>
                    <Grid container
                        alignItems="center">
                        <Grid className="hotel-image" item xs={6}>
                            <img src={hd.imgUrl} alt="Photos" />
                        </Grid>
                        <Grid item xs={6}>
                            <p className="hotel-title">{hd.title}</p>
                            <p className="hotel-description">{hd.des1}</p>
                            <p className="hotel-description">{hd.des2}</p>
                            <p className="hotel-description">{hd.des3}</p>
                            <p><span className="star-icon"><img src={icon} alt="icon" /> {hd.star}</span> <span className="price">${hd.price}/<span className="night">night</span></span> <span className="total-price">${hd.totalP} total</span></p>
                        </Grid>
                    </Grid>
                )
            }
        </div >
    );
};

export default HotelDetails;