import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
       <h1>Expense List</h1>
        
       {

           props.expenses.lenght===0?(<p>No expenses</p>):(
           props.expenses.map((expenseItem)=>( <ExpenseListItem key={expenseItem.id} expense={expenseItem}/>)))
       }
       

    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
  };
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);



export default ConnectedExpenseList;