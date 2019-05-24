import React from 'react';

const readings = (props) => {
    let deviceData = props.data.data;
    let activeReadings = 0;
    let inactiveReadings = 0;
    if(deviceData) {
        deviceData.map((device) => {
            device.active === true ? (activeReadings += 1) : (inactiveReadings += 1);
        })
    }
    
    return (
        <div className="Readings">
            <table className="ReadingsTable">
                <thead>
                    <tr>
                        <th>
                            Readings
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="Active-Readings">
                        <td>Active: {activeReadings}</td>
                    </tr>
                    <tr className="Inactive-Readings">
                        <td>Inactive: {inactiveReadings}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default readings;