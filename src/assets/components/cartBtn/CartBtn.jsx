import React from 'react';

const CartBtn = ({ cartItems}) => {
    return (
        <div className=' max-w-6xl mx-auto px-8 mb-7' >
            <h2 className='text-left'>Your Cart</h2>
            <ul className='flex flex-col gap-3 mt-6'>
                {cartItems.map((item, index) => (
                    <li className='flex bg-gray-50 py-4 rounded-2xl' key={index}>
                        <div className='p-2 rounded-full bg-white'>
                            <img src={item.url} alt={item.name} />
                        </div>
                        <div className='ml-2 flex flex-col'>
                            <h2>{item.name}</h2>
                            <p className='text-sm text-gray-500 px-0 '>${item.price}</p>
                            
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className='flex justify-between mx-1 my-4'>Total: <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span></h2>
<button className='bg-violet-800 hover:bg-blue-700 text-neutral-200 text-sm w-full py-2 px-4 rounded-full'>
                Proceed to Checkout
            </button>

        </div>
    );
};

export default CartBtn;