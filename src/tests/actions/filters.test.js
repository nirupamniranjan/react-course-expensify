import moment from 'moment';
import {setStartDate, 
    setEndDate,
    sortByDate,
    sortByAmount,
    setTextFilter} from '../../actions/filters';

test('should generate set start date action object',()=>{

    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type:'START_DATE',
        startDate:moment(0)
    });
});

test('should generate set end date Object',()=>{
    const action =setEndDate(moment(0));
    expect(action).toEqual({
        type:'END_DATE',
        endDate:moment(0)
    })
});


test('test sort by Amount ',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
});


test('test sort by Date ',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
});

test('test set filter text for default value',()=>{
    const action = setTextFilter();

    expect(action).toEqual({
        type:'SET_FILTER',
        text:''
    })
});

