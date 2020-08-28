import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const expensetListItem=(props)=>(


    <div>
        <p>
            Description:{props.expense.description} {" "}

            amount : {numeral(props.expense.amount).format("$0,0.00")} {" "}
            createdAt : {moment(props.expense.createdAt).format('MMMM Do, YYYY')}  {" "}
            <Link to={`/edit/${props.expense.id}`}>Edit</Link>
        </p>
    </div>
    

);



export default expensetListItem;