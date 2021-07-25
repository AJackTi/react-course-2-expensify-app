import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import {getVisibleExpenses} from '../selectors/expenses'

export const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) =>
                    <ExpenseListItem
                        key={expense.id}
                        {...expense}
                    ></ExpenseListItem>)
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesList)

