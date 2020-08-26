import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
import { unstable_batchedUpdates } from 'react-dom';
import { monitorEventLoopDelay } from 'perf_hooks';
import expenses from '../Fixtures/expenses'



test('should filter by text value',()=>{
    const result = selectExpenses(expenses,{text:'e'});
    
    expect(result).toEqual([expenses[0],expenses[2]]);
});

test('should filter by startDate',()=>{

    const filters = {
        text:'',
        sortBy :'date',
        startDate :moment(0),
        endDate:undefined
    }
    const results = selectExpenses(expenses,filters);
   

    expect(results).toEqual([expenses[2],expenses[0]])
});

test('should filter by endDate',()=>{

    const filters = {
        text:'',
        sortBy :'date',
        startDate :undefined,
        endDate:moment(0)
    }
    const results = selectExpenses(expenses,filters);
   

    expect(results).toEqual([expenses[1],expenses[0]])
});

test('should sort by Date',()=>{

    const filters = {
        text:'',
        sortBy :'date',
        startDate :moment(0),
        endDate:undefined
    }
    const results = selectExpenses(expenses,filters);
   

    expect(results).toEqual([expenses[2],expenses[0]])
});

test('should sortBy amount',()=>{

    const filters = {
        text:'',
        sortBy :'amount',
        startDate :moment(0),
        endDate:undefined
    }
    const results = selectExpenses(expenses,filters);
   

    expect(results).toEqual([expenses[2],expenses[0]])
});