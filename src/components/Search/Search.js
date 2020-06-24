import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../app/AppProvider';
import { Dropdown } from 'semantic-ui-react'

function Search() {

    const { nodes, links, nodeHandler, linkHandler } = useContext(AppContext);

    let updatedNodes = null;
    if (nodes !== null){
        updatedNodes = nodes.map((node, i) => ({
            key: i,
            value: node.name,
            text: node.name,
        }))
    }

    const handleChange = (e, { value }) => {
        // let updateNodes = nodes.filter( node => node.name.toLowerCase().includes(value.toLowerCase()))
        let updateLinks = links.filter( link => link.target.name.toLowerCase().includes(value.toLowerCase()) || link.source.name.toLowerCase().includes(value.toLowerCase()) )
        // console.log(updateNodes)
        console.log(updateLinks)
        // nodeHandler(updateNodes);
        linkHandler(updateLinks);
    }

    return (
        <div>
            {updatedNodes
            ? <Dropdown 
                placeholder = 'Select Hero'
                selectOnNavigation={ false }
                fluid
                search
                selection
                options={ updatedNodes }
                onChange={handleChange}
            />
            : null }
        </div>
    )
}

export default Search;