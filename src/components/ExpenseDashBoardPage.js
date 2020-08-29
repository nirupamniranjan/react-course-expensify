
 import React from 'react';

 import ExpenseList from './ExpenseList'
 import ExpenseListFilter from './ExpenseListFilter';
 import ExpensesSummary from './ExpenseSummary'
const ExpenseDashboardPage = () =>(


<div>
<ExpenseListFilter />
    <ExpenseList/>
    <ExpensesSummary/>
</div>

);


export default ExpenseDashboardPage;



