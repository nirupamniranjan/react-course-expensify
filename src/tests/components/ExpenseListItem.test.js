import ExpenseListItem from '../../components/ExpenseListItem'
import React from 'react'
import {shallow} from 'enzyme'
import expenses from'../Fixtures/expenses'

console.log(expenses[0])

test('Test Expense List Item',()=>{
  const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>)

    expect(wrapper).toMatchSnapshot();

});
