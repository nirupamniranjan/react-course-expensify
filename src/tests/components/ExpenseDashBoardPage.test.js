import React from 'react'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage'
import {shallow} from 'enzyme'


test('To Test Expense DashBoard Page',()=>{
    const wrapper = shallow(<ExpenseDashBoardPage/>)
    expect(wrapper).toMatchSnapshot();
})