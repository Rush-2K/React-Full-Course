import { configureStore } from 'redux';

//create reducer
const counterReducer = (state = { counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        };
    }

    if(action.type === 'decrement'){
        return {
            couter: state.counter - 1
        }
    }
    
    return {
        counter: state.counter + 1
    }
};    

//create the store
const store = configureStore(counterReducer);

//the component/subscriber
const counterSubscriber = () => {
    const latestState = store.getState(); //get the latest state after it was changed
    console.log(latestState);
};

//just point to the subscriber function
store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});