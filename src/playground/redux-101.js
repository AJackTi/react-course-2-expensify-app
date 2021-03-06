import {createStore} from "redux";

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT', decrementBy
})

const resetCount = () => ({type: 'RESET'})

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }

    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     }
    // } else {
    //     return state
    // }
    // console.log('running')
    // return state
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// Actions - than an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

// store.dispatch({
//     type: 'RESET'
// })

store.dispatch(resetCount())

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({count: 101}))

// I'd like to reset the count to zero
