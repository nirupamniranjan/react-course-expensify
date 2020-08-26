import React from 'react'
import {Link} from 'react-router-dom'


const expensetListItem=(props)=>(


    <div>
        <p>
            Description:{props.expense.description} {" "}

            amount : {props.expense.amount} {" "}
            createdAt : {props.expense.createdAt}  {" "}
            <Link to={`/edit/${props.expense.id}`}>Edit</Link>
        </p>
    </div>
    

);



export default expensetListItem;