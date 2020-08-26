import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilter'
import {filters,altfilters, altFilter} from '../Fixtures/filters'
import { setTextFilter } from '../../actions/filters';
import moment from 'moment'
import {DateRangePicker} from 'react-dates'

let setTextFilters, sortByDate,sortByAmount, setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilters=jest.fn();
    sortByAmount=jest.fn();
    sortByDate=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper= shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilters}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        
        />)

        
});

test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',()=>{
    wrapper.setProps({
        filters:altFilter
       });
       expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const value='Nirupam'
    wrapper.find('input').simulate('change',{
        target:{value}
    });

    expect(setTextFilters).toHaveBeenLastCalledWith(value)
});

test('should sort by date',()=>{
  const value= 'date';
  wrapper.setProps({
      filters:altFilter
  });
  wrapper.find('select').simulate('change',{
      target:{value}
  });
  expect(sortByDate).toHaveBeenCalled();

});
test('should sort by amount',()=>{
    const value= 'amount';
    wrapper.setProps({
        filters:altFilter
    });
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
  
  });

test('should handle date changes',()=>{
const startDate= moment(0).add('4','years');
const endDate= moment(0).add('8','years');
wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate});
expect(setStartDate).toHaveBeenLastCalledWith(startDate);
expect(setEndDate).toHaveBeenLastCalledWith(endDate);
 

});
test('Should handle date focus changes  ',()=>{

  const calanderFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calanderFocused);
  expect(wrapper.state('calanderFocused')).toBe(calanderFocused);

});
