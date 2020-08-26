import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'



const date= moment();

class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            description: props.expense?props.expense.description:'',
            textArea:props.expense?props.expense.textArea:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            createdAt:props.expense? moment(props.expense.createdAt): moment(),
            CalanderOnfocus:false,
            error:''
         };
        
    }
   onDiscrptionChange=(e)=>{
       const description = e.target.value;
       this.setState(()=>({description}));
   }
  
   onTextAreaChange = (e)=>{
       const textArea =e.target.value;
       this.setState(()=>({textArea}));
   }
   OnAmountChange =(e)=>{
       const amount =e.target.value;

       if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
           this.setState(({amount}));
       }

   };
   onDateChange=(createdAt)=>{
       if(createdAt){
    this.setState(()=>({createdAt}))
   }
}
onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.description||!this.state.amount){
        this.setState(()=> ({error:'Please provide description and amount.'}));
    }
    else{
        this.setState(()=>({error:''}));
        this.props.onSubmit({
            description: this.state.description,
            amount:parseFloat(this.state.amount,10),
            createdAt:this.state.createdAt.valueOf(),
            textArea:this.state.textArea
        })
    }
}

   onFocusChange=({focused})=>{
       this.setState(()=>({CalanderOnfocus:focused}));
   }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>

           <input type="text" 
           placeholder="Description" 
           autoFocus 
           value={this.state.description}
           onChange={this.onDiscrptionChange}
            />
           
           <input type="text" placeholder="amount"
            value={this.state.amount}
            onChange={this.OnAmountChange}
           />
           <SingleDatePicker
           date={this.state.createdAt}
           onDateChange={this.onDateChange}
           focused={this.state.CalanderOnfocus}
           onFocusChange={this.onFocusChange}
           numberOfMonths={1}
           isOutsideRange={(day)=>false}
           />
           <textarea
            placeholder="Add a note for your expense(Optiona)"
            value={this.state.textArea}
            onChange={this.onTextAreaChange}
          >


           </textarea>
            <button>Add Expense</button>
            </form>
        
               

            </div>
        );
    }
}

export default ExpenseForm;