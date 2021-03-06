import {startAddExpense,addExpense,editExpense,removeExpense, setExpenses, startSetExpenses, startRemoveExpense,startEditExpense} from '../../actions/expenses'

import expenses from '../Fixtures/expenses'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'


const createMockStore = configureStore([thunk])

beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({
        id,
        description,
        note,
        amount,
        createdAt
    })=>{
        expensesData[id]={description,note,amount,createdAt}
    });

    database.ref('expenses').set(expensesData).then(
       ()=>{done();})
    
})

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

        }
    })
});

test('should setup add expense to database and store',(done)=>{
    const store = createMockStore({});
    const expenseData={
        description:'Rent',
        amount:109500,
        createdAt:1000,
        note:'This was last months rent'
    };
    const addExpense=startAddExpense(expenseData);
  
       store.dispatch(addExpense).then(()=>{
        const actions = store.getActions()
        console.log(actions[0])
        expect(actions[0]).toEqual({
            
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        console.log(actions)
        const value=
         database.ref(`expenses/${actions[0].expense.id}`).once('value')
        console.log(value);
        return value;
    }).then((snapshot) =>{
        
        expect(snapshot.val()).toEqual(expenseData);
     
        done();

      }).catch((e)=>{
        console.log('error has occured',e)
      });
});


test('should setup add expenses to store and database with default',(done)=>{
    const store = createMockStore({});
    const expenseData={description :'',
    note:'',
    amount:0,
    createdAt:0};

    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
      

});

test('should setup set expenses action object with data',()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase',(done)=>{
    const store= createMockStore({});
    store.dispatch(startSetExpenses()).then(
        ()=>{
          const actions = store.getActions();
          expect(actions[0]).toEqual(
              {
                  type:'SET_EXPENSES',
                  expenses
              }
          );
          done();
        }
    )
});

test('should remove expense from firebase',(done)=>{
const store = createMockStore({});
const id= expenses[2].id;
store.dispatch(startRemoveExpense({id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual(
        {
            type:'REMOVE_EXPENSE',
            id
        }
    );
    return database.ref(`expenses/${id}`).once('value');

}).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy();
    done();
})
})


test('should edit expense from firebase',(done)=>{
    const store = createMockStore({});
    const id= expenses[2].id;
    const update ={id:id,...expenses[1]}
    store.dispatch(startEditExpense(id,update)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual(
            {
                type:'EDIT_EXPENSE',
                id,
                updates:update
            }
        );
        return database.ref(`expenses/${id}`).once('value');
    
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(update);
        done();
    })
    })
// test('should setup add expense action object with default values',()=>{
//     const expenseData={
//           };

//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description :'',
//             note:'',
//             amount:0,
//             createdAt:0,
//         id:expect.any(String)
//         }
//     })
// })