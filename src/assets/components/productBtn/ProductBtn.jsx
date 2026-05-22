import React from 'react';
import Card from '../card/Card';

const ProductBtn = ({ products, cartItems, setCartItems }) => {
    return (
        <div className='max-w-6xl mx-auto '>
            
            <ul className='flex flex-wrap gap-5 mt-8 justify-center'>
                {products.map((product) => (
                <Card product={product} cartItems={cartItems} setCartItems={setCartItems} />
                ))}
            </ul>
        </div>
    );
};

export default ProductBtn;