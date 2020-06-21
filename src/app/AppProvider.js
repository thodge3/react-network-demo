import React from 'react';
import moment from 'moment';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
    }

    componentDidMount = () => {
        this.timerId = setInterval(
            () => this.clockTick(),
            1000,
        );
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