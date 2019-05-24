import React from 'react';
import DeviceDetail from './DeviceDetail';

const deviceDetails  = (props) => {
    let filterText = props.filterText;
    var devices = [];
    let deviceData = props.data.data;
    if(deviceData) {
        devices = deviceData.map(function(device) {
            if (device.name.indexOf(filterText) === -1) {
              return;
            }
            return (<DeviceDetail onStatusChange={(event, device) => props.onStatusChange(event, device)}
                     key={device.name} device={device}/>);
        });
    } 
    
    return(
        <table className="DeviceTable">
            <thead>
                <tr>
                <th>NAME</th>
                <th>UNIT</th>
                <th>VALUE</th>
                <th>TIMESTAMP</th>
                <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
               {devices}
            </tbody>
        </table>
    )
}

export default deviceDetails;