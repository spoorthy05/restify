import React from 'react';

const errorMessage = (props) => (
    <div>
        {props.location.state.errorMessage || ''}
    </div>
)

export default errorMessage;