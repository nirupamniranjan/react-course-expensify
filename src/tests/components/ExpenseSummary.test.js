import {ExpenseSummary} from '../../components/ExpenseSummary'
import { shallow } from 'enzyme'
import expenses from '../Fixtures/expenses'
import React from 'react'


test('should render one value of the summary',()=>{
   const wrapper =   shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
  
    expect(wrapper).toMatchSnapshot()
   
})

test('should render one value of the summary',()=>{
    const wrapper =   shallow(<ExpenseSummary expenses={expenses}/>);
   
     expect(wrapper).toMatchSnapshot()
    
 })
 
 