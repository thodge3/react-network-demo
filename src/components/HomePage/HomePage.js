import React, { useContext } from 'react';
import { AppContext } from '../../app/AppProvider';

function HomePage () {

    const { startDate } = useContext(AppContext);

    return (
        <div>
            HomePage
            <p>
                { startDate }
            </p>
        </div>
    )
}

export default HomePage;