import { Check } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({ product, cartItems, setCartItems }) => {
 const [isInCart, setIsInCart] = useState(false);
 console.log(isInCart);
    return (
            <div className="card bg-base-100 max-w-xs shadow-sm px-2">
                <div className="card-actions justify-end">
                    <button className={`text-right text-sm px-2 py-1 rounded-full ${product.tag === 'Popular' ? 'bg-violet-100 text-violet-800' : product.tag === 'Best Seller' ? 'bg-amber-100 text-amber-800' :product.tag === 'New' ? 'bg-emerald-100 text-emerald-800' :''}`}>{product.tag}</button>
                </div>
                <div className='flex mx-4'>
                    <figure >
                        <img
                            src={product.url}
                            alt={product.name} />
                    </figure>
                </div>

                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className='text-left text-sm text-gray-500 mb-2'>{product.description}</p>
                    <p className="text-left font-bold text-lg">${product.price} <span className="text-sm font-normal text-gray-500">/{product.period}</span></p>
                    {product.features.map((feature, index) => (
                        <li key={index} className="text-left text-sm text-gray-500"><Check className="inline-block mr-2 text-green-500" />{feature}</li>
                    ))}
                    <div className="card-actions justify-end">
                        <button 
                        onClick={() => {
                            setCartItems([...cartItems, product]);
                            setIsInCart(true);
                        }}
                        className="btn bg-violet-800 text-amber-50 w-full rounded-full" disabled={isInCart}>Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Card;