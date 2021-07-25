const {store} = require("../store/configureStore");

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}))
//
// store.dispatch(removeExpense({id: expenseOne.expense.id}))
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 50}))
//
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
//
store.dispatch(sortByAmount()) // amount
// store.dispatch(sortByDate()) // date

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate(125))
//
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'psdajfasafw',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date of amount
        startDate: undefined,
        endDate: undefined
    }
}
