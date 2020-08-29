import expesesTotal from '../../selectors/expenses-total'
import expenses from '../Fixtures/expenses'
import expensesTotal from '../../selectors/expenses-total'




test('should return the sum of all expenses',()=>{
    
   const sumTotal= expensesTotal(expenses);
    
    expect(sumTotal).toEqual(21625)
})

test('should return zero in case of no expenses',()=>{
    const sumTotal = expensesTotal([]);
    expect(sumTotal).toEqual(0)
})

test('shoud return single expense value',()=>{
    const sumTotal = expensesTotal(expenses.filter((expense)=>{return expense.id==='1'}))
    expect(sumTotal).toEqual(125)
})