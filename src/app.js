import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore'
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import {getVisibleExpenses} from "./selectors/expenses";
import {Provider} from "react-redux";
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

// store.dispatch(addExpense({description: 'Water bill', amount: 45000, createdAt: 123}))
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
// store.dispatch(addExpense({description: 'Rent', amount: 109500}))
// store.dispatch(setTextFilter('water'))
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

// // addExpense -> Water bill
// // addExpense -> Gas bill
// // setTextFilter -> bill (2 items) -> water (1 item)
// // getVisibleExpenses -> print visible ones to screen
//
// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
