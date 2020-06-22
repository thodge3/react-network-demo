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
                        "val": 1
                    },
                    {
                        "id": "id2",
                        "name": "name2",
                        "val": 1
                    },
                ],
                "links": [
                    {
                        "source": "id1",
                        "target": "id2",
                        "value": 5,
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