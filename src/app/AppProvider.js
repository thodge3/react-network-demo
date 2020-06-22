import React from 'react';
import moment from 'moment';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: moment().format('YYYY-MM-DD HH:mm:ss'),
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
                ],
                "links": [
                    {
                        "source": "id1",
                        "target": "id2",
                        "value": 3,
                    },
                    {
                        "source": "id1",
                        "target": "id4",
                        "value": 1,
                    },
                    {
                        "source": "id2",
                        "target": "id3",
                        "value": 5,
                    },
                    {
                        "source": "id1",
                        "target": "id3",
                        "value": 10,
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
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    }

    clockTick = () => {
        this.setState({
            startDate: moment().format('YYYY-MM-DD HH:mm:ss')
        })
    }

    render(){
        return (
            <AppContext.Provider value={ this.state }>
                { this.props.children } 
            </AppContext.Provider>
        )
    }
}