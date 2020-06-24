import React from 'react';
import moment from 'moment';
import { csv } from 'd3';
import edges from '../data/updated_links.csv';
import nodes from '../data/updated_nodes.csv';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.nodeHandler = (updatedNodes) => {
            this.setState({
                displayNodes: updatedNodes
            })
        }

        this.linkHandler = (updatedLinks) => {
            this.setState({
                displayLinks: updatedLinks
            })
        }

        this.state = {
            startDate: moment().format('YYYY-MM-DD HH:mm:ss'),
            nodeHandler: this.nodeHandler,
            linkHandler: this.linkHandler,
            nodes: null,
            links: null,
            displayNodes: null,
            displayLinks: null,
            testData: {
                "nodes": [
                    {
                        "id": "id1",
                        "name": "name1",
                        "color": 'white',
                        "val": 1
                    },
                    {
                        "id": "id2",
                        "name": "name2",
                        "color": 'white',
                        "val": 1
                    },
                    {
                        "id": "id3",
                        "name": "name3",
                        "color": 'white',
                        "val": 1
                    },
                    {
                        "id": "id4",
                        "name": "name4",
                        "color": 'white',
                        "val": 1
                    },
                    {
                        "id": "id3",
                        "name": "name3",
                        "val": 1
                    },
                    {
                        "id": "id4",
                        "name": "name4",
                        "val": 1
                    },
                ],
                "links": [
                    {
                        "source": "id1",
                        "target": "id2",
                        "value": 1,
                    },
                    {
                        "source": "id4",
                        "target": "id2",
                        "value": 1,
                    },
                    {
                        "source": "id2",
                        "target": "id4",
                        "value": 10,
                    },
                    {
                        "source": "id3",
                        "target": "id1",
                        "value": 5,
                    },
                    {
                        "source": "id3",
                        "target": "id2",
                        "value": 3,
                    },
                ]
            },
        }
    }

    componentDidMount = () => {
        /* this.timerId = setInterval(
            () => this.clockTick(),
            1000,
        );
        */
       this.getLocalNetwork();
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    }

    getLocalNetwork = () => {
        this.getLocalNodes();
        this.getLocalLinks();
    }

    getLocalLinks = async () => {
        await csv(edges).then((data) => {
            var newObj = data.map((obj) => ({
                source: obj.hero,
                target: obj.comic,
                value: 3,
            }))

            this.setState({
                links: [...newObj],
                displayLinks: [...newObj]
            })
        })
    }

    getLocalNodes = async () => {
        await csv(nodes).then((data) => {
            // let fin = data.filter((datum) => datum.type === 'hero')
            var newNode = data.map((obj, i) => ({
                id: obj.node,
                name: obj.node,
                type: obj.type,
                val: 1
            }))
            this.setState({
                nodes: [...newNode],
                displayNodes: [...newNode]
            })
        })
    }

    clockTick = () => {
        this.setState({
            startDate: moment().format('YYYY-MM-DD HH:mm:ss')
        })
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}