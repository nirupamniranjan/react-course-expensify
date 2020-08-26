

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


const jsx =(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDom.render(jsx,document.getElementById('app'));

