import React from 'react'
import PageNotFound from '../../components/PageNotFound'
import {shallow} from 'enzyme'

test('Test to Validate PageNotFound',()=>{
    const wrapper= shallow(<PageNotFound/>);
    expect(wrapper).toMatchSnapshot();
})