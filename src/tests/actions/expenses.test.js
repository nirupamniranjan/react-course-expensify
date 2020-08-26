import {addExpense,editExpense,removeExpense} from '../../actions/expenses'



test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('New note value',()=>{
    const update ={note:'new note value'};
    const action = editExpense('123abc',update);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'new note value'}
    })
});

test('should setup add expenses with provided Values',()=>{
    const expenseData={
        description:'Rent',
        amount:109500,
        createdAt:1000,
        note:'This was last months rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
        }
    })
});

test('should setup add expense action object with default values',()=>{
    const expenseData={
          };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description :'',
            note:'',
            amount:0,
            createdAt:0,
        id:expect.any(String)
        }
    })
})