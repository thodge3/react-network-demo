import React, { useContext } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';

import { ForceGraph2D } from 'react-force-graph';
import { AppContext } from '../../app/AppProvider';

function Network() {

    const { testData } = useContext(AppContext);

    console.log(testData)

    return (
        <div>
            <ForceGraph2D 
            graphData = { testData } 
            linkDirectionalParticles="value"
            linkDirectionalParticleSpeed={d => d.value * 0.001}
            linkDirectionalParticleWidth={1}
            />
        </div>
    )
}

export default Network;