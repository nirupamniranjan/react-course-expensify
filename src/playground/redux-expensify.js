import {createStore , combineReducers} from 'redux'
import uuid from 'uuid'
//Add Expense

const addExpense = ({descripton ='',
note='',
amount=0,
createAt=0}) =>({
    type: 'ADD_EXPENSE',
    expense :{
        id: uuid(),
        descripton ,
        note,
        amount,
        createAt
    }

});
const removeExpense=({id} ={})=>({
    type: 'REMOVE_EXPENSE',
     id 
});

//EDIT Expense

const editExpense =(id,updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter= (text= '')=>(
    {
    type : 'SET_FILTER',
    text
    }
);

const sortByDate= ()=>({
    type :'SORT_BY_DATE'
});

const sortByAmount= ()=>({
    type :'SORT_BY_AMOUNT'
});

const setStartDate =(startDate = undefined)=>({
    type: 'START_DATE',
    startDate
});

const setEndDate =(endDate = undefined)=>({
    type: 'END_DATE',
    endDate
})
//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state =expensesReducerDefaultState, action) => {
     switch(action.type) {
         case 'ADD_EXPENSE' :
         return [...state,action.expense];
         case 'EDIT_EXPENSE' :
             return state.map((expense)=>{
                 if(expense.id===action.id){
                    
                    return  {...expense,...action.updates}
                 }
                 else
                 {
                     return expense
                 }
             })
         case 'REMOVE_EXPENSE' :
            return state.filter(({id})=> id!==action.id)
  
            default:
             return state;
     }
};

const filterReducerDefaultState ={ text:'', sortBy:'date',startDate:undefined,endDate:undefined};

const filterReducer =(state =filterReducerDefaultState,action)=>{
    switch (action.type){
        case 'SET_FILTER':
            
            return {...state,text:action.text}
            case 'SORT_BY_DATE':
            
                return {...state,sortyBy:'date'}
                case 'SORT_BY_AMOUNT':
            
                    return {...state,sortBy:'amount'}
                    case 'START_DATE':
            
                        return {...state,startDate:action.startDate}
                        case 'END_DATE':
            
                            return {...state,endDate:action.endDate}
                                
            default:
            return state;
    }
}

//get visible expensese

const getVisibleExpenses =(expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch=typeof startDate !=='number' ||expense.createAt>=startDate;
        const endDateMatch= typeof endDate !=='number'||expense.createAt<=endDate;
        const textMatch= expense.descripton.toLowerCase().includes(text.toLowerCase());
        return startDateMatch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date')
        {
           return a.createAt<b.createAt?1:-1; 
        }

        if(sortBy==='amount'){
            return a.amount>b.amount?1:-1;
        }
    });
};


const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filterReducer
    
})
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);});

const expenseOne=store.dispatch(addExpense({descripton:'Rent',amount:100,createAt:10}));
const expenseTwo=store.dispatch(addExpense({descripton:'food',amount:111,createAt:130}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(12500))
store.dispatch(setEndDate(125))

store.dispatch(setTextFilter('oo'))
const demoState ={
    expenses :[{
        id: 'food',
        descripton :'hotel',
        note: 'had a fun dinner out',
        amount:1000,
        createAt: 0
    }],
  filters : {
      text : 'rent',
      sortBy : 'amount',
      startDate : undefined,
      endDate :undefined
  }

};



