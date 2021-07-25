import React from "react";
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from "../../components/Header";
import {shallow} from 'enzyme'
import toJson from "enzyme-to-json";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe('Expensify')

    // 1.
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
});
