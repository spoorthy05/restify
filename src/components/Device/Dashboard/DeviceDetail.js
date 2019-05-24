import React from 'react';
import Switch from "react-switch";

const deviceDetail = (props) => {
    return (
        <tr>
            <td>{props.device.name}</td>
            <td>{props.device.unit || 'NA'}</td>
            <td>{props.device.value}</td>
            <td>{props.device.timestamp}</td>
            <td>
                <Switch onColor='#144c52' offColor='#ccc'
                    id={props.device.name}
                    className="status-switch"
                    onChange={(checked, event, id) => props.onStatusChange(checked, id)}
                    checked={props.device.active} />
            </td>
        </tr>
    )
}

export default deviceDetail;