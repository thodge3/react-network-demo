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
        let updateLinks = [];

        value.forEach(element => {
            updateLinks.push(
                links.filter( link => link.target.name.toLowerCase().includes(element.toLowerCase()) || link.source.name.toLowerCase().includes(element.toLowerCase()) )
            )
        });
        // let updateNodes = nodes.filter( node => node.name.toLowerCase().includes(value.toLowerCase()))
        // let updateLinks = links.filter( link => link.target.name.toLowerCase().includes(value.toLowerCase()) || link.source.name.toLowerCase().includes(value.toLowerCase()) )
        // console.log(updateNodes)
        console.log(updateLinks)
        // nodeHandler(updateNodes);
        linkHandler(updateLinks);
    }

    const testHandleChange = (e, { value }) => {
        console.log(value);
        let updateLinks = [];
        value.forEach(element => {
            let newArray = links.filter( link => link.target.name.toLowerCase().includes(element.toLowerCase()) || link.source.name.toLowerCase().includes(element.toLowerCase()) )
            updateLinks.push(newArray);
        });
        let mergedUpdateLinks = [].concat(...updateLinks);
        console.log(mergedUpdateLinks);
        linkHandler(mergedUpdateLinks);
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
                multiple
                options={ updatedNodes }
                onChange={ testHandleChange }
            />
            : null }
        </div>
    )
}

export default Search;