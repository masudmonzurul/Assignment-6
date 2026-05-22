import React, { use, useState } from 'react';
import ProductBtn from '../productBtn/ProductBtn';
import CartBtn from '../cartBtn/CartBtn';

const CardDiv = ({productsPromise, setCartBtn}) => {
    const products = use(productsPromise);
    const [selectedBtn, setSelectedBtn] = useState('products');
    const [cartItems, setCartItems] = useState([]);
    return (
        <div className='text-center mt-20'>
           <h1 className=" text-3xl font-semibold mb-2">Premium Digital Tools</h1>
           <p className=' text-xs font-light text-gray-500 mb-3'>Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>

           <button onClick={() => {setSelectedBtn('products');setCartBtn(true)}} className={`btn rounded-full mr-4 text-xs font-light ${selectedBtn === 'products' ? 'bg-violet-800 text-amber-50' : 'bg-neutral-50'}`}>Products</button>
           <button onClick={() => {setSelectedBtn('cart');setCartBtn(false)}} className={`btn rounded-full text-xs font-light ${selectedBtn === 'cart' ? 'bg-violet-800 text-amber-50' : 'bg-neutral-50'}`}>Cart({cartItems.length})</button>

           {selectedBtn === 'products' ? (<ProductBtn products={products} cartItems={cartItems} setCartItems={setCartItems} />) : <CartBtn cartItems={cartItems}/>}

        </div>
    );
};

export default CardDiv;