import React from 'react';
import userImag from '../../img/user.png';
import packageImag from '../../img/package.png';
import rocketImg from '../../img/rocket.png';

const GetStartedBody = ({cartBtn}) => {
    return (
        cartBtn &&
        <div className='text-center py-15 bg-gray-50 '>
            <h2 className='text-3xl font-semibold mb-3'>Get Started in 3 Steps</h2>
            <p className="text-center text-sm text-gray-500 pb-6">Start using premium digital tools in minutes, not hours.</p>

            <div className='flex gap-4 justify-center'>
                <div className='bg-base-100 max-w-82 p-5 rounded-2xl'>
                    <div className='text-right'>
                        <button className=' btn bg-violet-800 text-gray-200 rounded-full text-xs text-right w-10'>01</button>
                    </div>

                    <div className='p-2 mb-2 w-10 bg-violet-100 rounded-full text-center mx-auto'>
                        <img src={userImag} alt="" />
                    </div>
                    <h2 className='text-center'>Create Account</h2>
                    <p className='text-center text-gray-500 text-sm mt-3'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='bg-base-100 max-w-82 p-5 rounded-2xl'>
                    <div className='text-right'>
                        <button className=' btn bg-violet-800 text-gray-200 rounded-full text-xs text-right w-10'>02</button>
                    </div>

                    <div className='p-2 mb-2 w-10 bg-violet-100 rounded-full text-center mx-auto'>
                        <img src={packageImag} alt="" />
                    </div>
                    <h2 className='text-center'>Choose Products</h2>
                    <p className='text-center text-gray-500 text-sm mt-3'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className='bg-base-100 max-w-82 p-5 rounded-2xl'>
                    <div className='text-right'>
                        <button className=' btn bg-violet-800 text-gray-200 rounded-full text-xs text-right w-10'>03</button>
                    </div>

                    <div className='p-2 mb-2 w-10 bg-violet-100 rounded-full text-center mx-auto'>
                        <img src={rocketImg} alt="" />
                    </div>
                    <h2 className='text-center'>Start Using</h2>
                    <p className='text-center text-gray-500 text-sm mt-3'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStartedBody;