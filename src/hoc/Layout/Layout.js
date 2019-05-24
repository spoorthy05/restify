import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

const layout = (props) => (
    <React.Fragment>
        <Navigation />
        <main className="Content">
            {props.children}
        </main>
    </React.Fragment>
)

export default layout;

