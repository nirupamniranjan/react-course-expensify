import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter,sortByAmount,sortByDate, setStartDate, setEndDate} from '../actions/filters'



export class ExpenseListFilters extends React.Component{

    state ={
        calanderFocused:null
    };

    onDatesChange=({startDate,endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange= (calanderFocused)=>{
        this.setState(()=>({calanderFocused}))
    }

    onTextChange = (e)=>{
        
        this.props.setTextFilter(e.target.value);
    };
    onSortChange =(e)=>{
        
        if(e.target.value==='date')
        this.props.sortByDate();
        else{
            this.props.sortByAmount()
        }
        };
render(){
   return (
    <div>
    <input type = "text" defaultValue ={this.props.filters.text} onChange={
        this.onTextChange
}
        
        />

        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
            <option value ="date">
                Date
            </option>
            <option value="amount">
                Amount
            </option>
        </select>
        <DateRangePicker
         startDate={this.props.filters.startDate}
         startDateId={'startDate'}
         endDate={this.props.filters.endDate}
         endDateId={'endDateId'}
         onDatesChange={this.onDatesChange}
         focusedInput={this.state.calanderFocused}
         onFocusChange={this.onFocusChange}
         numberOfMonths={1}
         showClearDates={true}
         isOutsideRange={()=>{false}}
        
        />          

</div>

   );
    }

};
const mapStateToProps =(state) =>{
    return{ 
    filters:state.filters
    }
};

const mapDispatchToProps=(dispatch)=>({
   setTextFilter:(text)=> dispatch(setTextFilter(text)),
   sortByDate:()=>dispatch(sortByDate()),
   sortByAmount:()=>dispatch(sortByAmount()),
   setSortByDate:(startDate) =>dispatch(setStartDate(startDate)),
   setEndDate:(endDate) =>dispatch(setEndDate(endDate))

});

export default connect(mapStateToProps,mapStateToProps)(ExpenseListFilters)