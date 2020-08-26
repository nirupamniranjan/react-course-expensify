import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../Fixtures/expenses'

let onSubmit , history, wrapper;

beforeEach(()=>{
    onSubmit=jest.fn();
    history={push:jest.fn()};
    wrapper = shallow(<EditExpensePage expense ={expenses[1]}editExpense={onSubmit} removeExpense={onSubmit} history={history}/>)
});

test('should render edit expense page',()=>{
    expect(wrapper).toMatchSnapshot();
});


test('should handle edit expense page',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
});


test('should handle remove expense page',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith({"id":"2"})
});