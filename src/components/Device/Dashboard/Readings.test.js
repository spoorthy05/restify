import React from 'react';
import { mount } from 'enzyme';
import Readings from './Readings';

describe('Readings', () => {
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
    };
    let updateData = {
        "data":[ {
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
            "active": true
        }]
    };
    it('Should count the active readings and reflect the updated readings', () => {
        const component = mount(<Readings {...data}/>);
        component.setProps({data});
        expect(component.find('tr.Active-Readings td:first-child').html()).toBe('<td>Active: 1</td>');
        component.setProps({ data: updateData });
        expect(component.find('tr.Active-Readings td:first-child').html()).toBe('<td>Active: 2</td>');
    });

    it('Should count the active and inactive readings', () => {
        const component = mount(<Readings {...updateData}/>);
        component.setProps({data: updateData});
        expect(component.find('tr.Active-Readings td:first-child').html()).toBe('<td>Active: 2</td>');
        expect(component.find('tr.Inactive-Readings td:first-child').html()).toBe('<td>Inactive: 0</td>');
    })
})