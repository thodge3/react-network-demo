import React, { useContext } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';

import { AppContext } from '../../app/AppProvider';

function Network () {

    const { startDate } = useContext(AppContext);

    return (
        <div>
            Network
            <p>
                { startDate }
            </p>
        </div>
    )
}

export default Network;