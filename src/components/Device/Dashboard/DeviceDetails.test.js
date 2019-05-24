import React from 'react';
import DeviceDetails from './DeviceDetails';
import { shallow } from 'enzyme';

describe('DeviceDetails', () => {
    let data = {
        "data": [
            {
                "name": "acceleration_x",
                "unit": "m/s2",
                "value": 25.993848858558,
                "timestamp": 1556550441396,
                "active": true
            },
            {
                "name": "acceleration_y",
                "unit": "m/s2",
                "value": -128.993848858558,
                "timestamp": 1556550446366,
                "active": false
            }]
    }

    let noData = {"data" : []};
    it('should render correctly with no props', () => {
        const component = shallow(<DeviceDetails {...data}/>);
        component.setProps(data);
        expect(component).toMatchSnapshot();
      });

    it('should render correctly with empty props', () => {
        const component = shallow(<DeviceDetails {...noData}/>);
        component.setProps(noData);
        expect(component).toMatchSnapshot();
    });
});
