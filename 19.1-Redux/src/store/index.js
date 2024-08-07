// import { legacy_createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth'

// const initialCounterState = { counter: 0, showCounter: true};
// const initialAuthState = { isAuthenticated: false }

//prepare slice of global state
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         }
//     }
// });

// const authSlice = createSlice({
//     name: 'authentication',
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true; 
//         },
//         logout(state) {
//             state.isAuthenticated = false; 
//         },
//     }
// });

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state
// };

//create store
// const store = legacy_createStore(counterReducer);

//it accepts configuration object
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

//create action object for us
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
