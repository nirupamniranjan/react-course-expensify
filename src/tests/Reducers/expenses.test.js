import expenseReducer from '../../reducers/expenses'
import expenses from '../Fixtures/expenses'
import moment from 'moment'

test('should set default state',()=>{

const state = expenseReducer(undefined,{type:'@@INIT'});

expect(state).toEqual([])

})

test('should remove expense by id',()=>{

    const action ={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
   
    const state = expenseReducer(expenses,action);
   
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('should not remove expense by id',()=>{

    const action ={
        type:'REMOVE_EXPENSE',
        id:-1
    }
   
    const state = expenseReducer(expenses,action);
   
    expect(state).toEqual(expenses)
});

test('should add expense ',()=>{
    const addExpense={
        id:'4',
        description:'mayo',
        note:'',
        amount:9000,
        createdAt:moment(0).add(5,'days').valueOf()
    };
    const action ={
        type:'ADD_EXPENSE',
        expense: addExpense
    }
   
    const state = expenseReducer(expenses,action);
   
    expect(state).toEqual([...expenses,addExpense])
});



test('should edit expense ',()=>{

    const updateId='3';
    const updateDescription='mayo_edited'
    const updateExpense={
        
        description:updateDescription
       
    };
    const action ={
        type:'EDIT_EXPENSE',
        id:updateId,
        updates:updateExpense
       
    }
   
    const state = expenseReducer(expenses,action);
     const result=state.filter(({id})=>{return id===updateId});
     
    expect(result[0].description).toEqual(updateDescription)
});



test('should  not edit expense ',()=>{

    const updateId='4';
    const updateDescription='mayo_edited'
    const updateExpense={
        
        description:updateDescription
       
    };
    const action ={
        type:'EDIT_EXPENSE',
        id:updateId,
        updates:updateExpense
       
    }
   
    const state = expenseReducer(expenses,action);
     
    expect(state).toEqual(state)
});

test('should set expenses',()=>{
    const expenses={
        id:'4',
        description:'Pizza',
        note:'',
        amount:12500,
        createdAt:moment(0).subtract(3,'days').valueOf()
    }

    const action = {
        type :'SET_EXPENSES',
        expenses
    }

    const state = expenseReducer(expenses,action)

    expect(state).toEqual(expenses)
})