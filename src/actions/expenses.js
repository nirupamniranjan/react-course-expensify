
import uuid from 'uuid'
import database from '../firebase/firebase'
import { add } from 'numeral';
export const addExpense = (expense) =>({
    type: 'ADD_EXPENSE',
    expense 

});

export const startAddExpense = (expenseData={description :'',
note:'',
amount:0,
createdAt:0})=>{

    return (dispatch)=>{
        const {description ='',
        note='',
        amount=0,
        createdAt=0}=expenseData;
        const expense={description,note,amount,createdAt};

        
       const submitData=database.ref('expenses').push(expenseData);
        
       return submitData.then((ref)=>{
          
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        }).catch((e)=>{
            console.log(e + 'error occured')
        })
    }
}
export const removeExpense=({id} ={})=>({
    type: 'REMOVE_EXPENSE',
     id 
});

//EDIT Expense

export const editExpense =(id,updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = (expenses) =>({
    type : 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{

    return (dispatch)=>{
        
      return database.ref('expenses').once('value').then((snapshot)=>{
       const expenses = [];
       snapshot.forEach((childSnapshot)=>{

        expenses.push({
            id : childSnapshot.key,
            ...childSnapshot.val()
       })
    })
        
        dispatch(setExpenses(expenses))
    
    
    })
        
       
    }
}
