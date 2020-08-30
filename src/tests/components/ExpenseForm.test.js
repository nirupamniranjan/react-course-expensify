import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../Fixtures/expenses'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>);

    expect(wrapper).toMatchSnapshot();
});



test('should render ExpenseForm with data correctly',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);

    expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submission',()=>{
   const wrapper = shallow(<ExpenseForm/>);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
   });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should set description on input change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value ='Nirupam';
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })

    expect(wrapper.state('description')).toBe(value)

})


test('should set description on input change for textArea',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value ='Nirupam in text area';
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })

    expect(wrapper.state('textArea')).toBe(value)

})

test('should set description on input change for valid amount',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value ='12';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })

    expect(wrapper.state('amount')).toBe(value)

})

test('should set description on input change for invalid',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value ='12.221';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })

    expect(wrapper.state('amount')).toBe("")

});

test('should call onSubmit prop for valid form subission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
       });

       expect(wrapper.state('error')).toBe('');

       expect(onSubmitSpy).toHaveBeenLastCalledWith({
           description:expenses[0].description,
           amount:expenses[0].amount/100,
           createdAt:expenses[0].createdAt,
           textArea:expenses[0].textArea
       })
    

});

test('should find the value on Date Change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
   // console.log(wrapper)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
});


test('should find the value on Focus Change',()=>{
    const focused=true;
    const wrapper = shallow(<ExpenseForm/>);
    
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('CalanderOnfocus')).toEqual(focused)
});