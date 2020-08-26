import moment from 'moment'
import filtersReducers from '../../reducers/filters'

test('should setup default filters values',()=>{
    const state = filtersReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }) 
});


test('should set sortBy to amount',()=>{
    const state = filtersReducers(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount') 
});


test('should set sortBy to date',()=>{
   const currentState ={
       text:'',
       startDate:undefined,
       endDate:undefined,
       sortBy:'amount'
       
   };

   const action={type:'SORT_BY_DATE'}

   const state=filtersReducers(currentState,action);
   expect(state.sortBy).toEqual('date')
});


test('should set text filter',()=>{
    const action={type:'SET_FILTER',text:'Nirupam'};

    const state =filtersReducers(undefined,action);
    expect(state.text).toEqual('Nirupam')
});

test('should set startDate filter',()=>{
    const action={type:'START_DATE',startDate:moment(0)};

    const state =filtersReducers(undefined,action);
    expect(state.startDate).toEqual(moment(0))
});


test('should set endDate filter',()=>{
    const action={type:'END_DATE',endDate:moment(0)};

    const state =filtersReducers(undefined,action);
    expect(state.endDate).toEqual(moment(0))
});