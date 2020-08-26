

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from'./store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import filter from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store=configureStore();


store.subscribe(()=>(console.log(store.getState())))
store.dispatch(addExpense({description:'Water Bill',note:'It\'s essential',amount:20,createdAt:2001}));
store.dispatch(addExpense({description:'Gas Bill',note:'It\'s essential',amount:200,createdAt:0}));
store.dispatch(addExpense({description:'Rent',note:'It\'s essential',amount:220,createdAt:0}));
store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));  
},3000)
const state =store.getState();
const output=filter(state.expenses,state.filters)

const jsx =(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDom.render(jsx,document.getElementById('app'));

