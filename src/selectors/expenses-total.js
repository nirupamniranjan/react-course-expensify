

export default (expenses=[])=>{
    
        const amountArray = expenses.map((expense)=>{return expense.amount});
     
      return  amountArray.reduce ((total,amount)=>{return total+amount},0);
    }
