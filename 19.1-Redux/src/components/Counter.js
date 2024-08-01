import { useSelector, useDispatch } from 'react-redux'; //allow us to select a part of our state manage by the store

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); //will dispatch an action against our redux store
  const counter = useSelector(state => state.counter); //retrieve piece of data of the state
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5}) //amount is properties
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
