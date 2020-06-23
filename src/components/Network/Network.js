import React, { useContext } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';

import { ForceGraph3D } from 'react-force-graph';
import { AppContext } from '../../app/AppProvider';

function Network() {

    const { nodes, links } = useContext(AppContext);

    const data = {
        nodes: nodes,
        links: links
    }

    if (data.nodes !== null && data.links !== null) {
        console.log(data)
    }
    // console.log(data)
    /*
    <ForceGraph2D
                    graphData={ data }
                    linkDirectionalParticles="value"
                    linkDirectionalParticleSpeed={d => d.value * 0.001}
                    linkDirectionalParticleWidth={1}
                />
    */

    return (
        <div>
            {data.nodes !== null && data.links !== null
                ? <ForceGraph3D
                    graphData={ data }
                    nodeAutoColorBy="type"
                />
                : "null"}
        </div>
    )
}

export default Network;