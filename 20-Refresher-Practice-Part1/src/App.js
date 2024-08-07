import {useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-action';
import { fetchCartData } from './store/cart-action';

let isInitial = true;

function App() {
  //state automatically
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  //dispatch as dependencies as completeness it will not rerun
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
      // dispatch(uiActions.showNotification({
      //   status: 'pending',
      //   title: 'Sending...',
      //   message: 'Sending cart data!'
      // }))
      // const response = await fetch(
      //   'https://react-http-5e77e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
      //   {
      //     method: 'PUT',
      //     body: JSON.stringify(cart)
      //   }
      // )
      // if (!response.ok){
      //   throw new Error('Sending cart data failed')
      // }
      
      // dispatch(uiActions.showNotification({
      //   status: 'success',
      //   title: 'Success',
      //   message: 'Sent cart data successfully!'
      // }))
    // } 

    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }

    

    // sendCartData().catch((error) => {
    //   dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sent cart data failed'
    //   }))
    // })
  }, [cart, dispatch])
  
  return (
    <Fragment>
      {notification && 
        <Notification 
          status={notification.status} 
          title={notification.title} 
          message={notification.message}
        />}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
