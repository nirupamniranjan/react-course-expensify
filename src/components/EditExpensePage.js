import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense,startRemoveExpense} from '../actions/expenses'


export class  EditExpensePage extends React.Component{
     onSubmit =(expense) =>{
        
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
       

    };
    onClick =(e)=>{
        const id= this.props.expense.id
        this.props.startRemoveExpense({id})
        this.props.history.push('/')
    }
    
  render(){
    return (

    <div>
    <ExpenseForm expense ={this.props.expense} onSubmit={this.onSubmit}/>
    
    <button onClick={this.onClick}>Remove</button>
</div>
)}


};

const mapStateToProps =(state,props)=>{
    return {
        expense : state.expenses.find((expense)=>{
            return expense.id===props.match.params.id
        })

       
    
    }

};

const mapDispathToProps =(dispatch,props)=>({
    editExpense:(id,expense) => dispatch(addExpense(id,expense)),
    startRemoveExpense:(expense)=> dispatch(startRemoveExpense(expense))
});

export default connect(mapStateToProps,mapDispathToProps)(EditExpensePage);