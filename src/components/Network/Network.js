import React, { useContext } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';

import { ForceGraph3D } from 'react-force-graph';
import { AppContext } from '../../app/AppProvider';
import { Search } from '../../components';

function Network() {

    const { testData, nodes, links, displayLinks, displayNodes } = useContext(AppContext);

    const data = {
        nodes: displayNodes,
        links: displayLinks,
    }

    var filterNodes = {};
    if (nodes !== null){
        filterNodes = nodes.filter( node => node.name.toLowerCase().includes('spider') )
        // console.log(filterNodes);
    }

    if (data.nodes !== null && data.links !== null) {
        // console.log(data)
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
            <Search />

            {data.nodes !== null && data.links !== null
                ? <ForceGraph3D
                    graphData={ data }
                    nodeAutoColorBy="type"
                    // linkDirectionalParticles="value"
                    // linkDirectionalParticleSpeed = { d => d.value * 0.001 }
                />
                : "Loading..."}
        </div>
    )
}

export default Network;