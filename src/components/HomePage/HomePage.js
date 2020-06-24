import React, { useContext, useEffect } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';
import { AppContext } from '../../app/AppProvider';

function HomePage () {

    const { startDate } = useContext(AppContext);

    return (
        <div>
            HomePage
            <p>
                { startDate }
            </p>
        </div>
    )
}

export default HomePage;