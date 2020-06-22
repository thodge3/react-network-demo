import React, { useContext } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';

import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';

import { AppContext } from '../../app/AppProvider';

function Network() {

    const { testData } = useContext(AppContext);

    console.log(testData)

    const genRandomTree = (N = 1000) => {
        return {
          nodes: [...Array(N).keys()].map(i => ({
            id: i,
          })),
          links: [...Array(N).keys()]
            .filter(id => id)
            .map(id => ({
              source: id,
              target: Math.round(Math.random() * (id - 1))
            }))
        };
    }

    return (
        <div>
            <ForceGraph3D 
            graphData = { testData } 
            nodeLabel="name"
            nodeThreeObject={node => {
                const sprite = new SpriteText(node.id);
                sprite.color = node.color;
                sprite.textHeight = 8;
                return sprite;
              }}
            linkDirectionalParticles="value"
            linkDirectionalParticleSpeed={d => d.value * 0.001}
            linkDirectionalParticleWidth={2}
            />
        </div>
    )
}

export default Network;