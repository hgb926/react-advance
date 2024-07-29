import React, {useState} from 'react';
import Layout from './redux-cart/components/Layout/Layout'
import Cart from './redux-cart/components/Cart/Cart'
import Products from './redux-cart/components/Shop/Products'
import { useSelector, useDispatch } from 'react-redux'


const App = () => {

    const isVisible = useSelector(state => state.ui.cartIsVisible);
    console.log(isVisible)


    return (
        <Layout>
            {isVisible && <Cart/>}
            <Products/>
        </Layout>
    );
};

export default App;
