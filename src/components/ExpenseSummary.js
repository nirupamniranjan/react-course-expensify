import React from 'react'
import addExpense from '../selectors/expenses-total'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'


export class ExpenseSummary extends React.Component{
    
    render(){
        return (
            <div>
               <p>Viewing {this.props.expenses.length} expenses totalling {addExpense(this.props.expenses)}</p>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{ 
    expenses:selectExpenses(state.expenses,state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseSummary)