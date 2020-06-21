import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: '2020-06-01',
        }
    }

    render(){
        return (
            <AppContext.Provider value={ this.state }>
                { this.props.children } 
            </AppContext.Provider>
        )
    }
}