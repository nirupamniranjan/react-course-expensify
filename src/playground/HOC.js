//Higher order component 

import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props) =>(
    <div>
        <h1>Info</h1>
<p>This is info component {props.info}</p>
    </div>

);

const withAdminWarning =(WrappedComponent) => {
    return (props)=>(
       <div>
           {props.isAdmin&&<h1>Admin Warning!!!!</h1>}

           <WrappedComponent {...props}/>
       </div>
    );

}

const requireAuthentication  =(WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAuthenticated ?
             <WrappedComponent {...props}/>
            :
            
               <h1>Plesase Authenticate</h1>
}

        </div>
    );
}

const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={true} info='test'/>,document.getElementById('app'));