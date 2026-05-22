import React from 'react';

const TransformWorkflow = ({ cartBtn }) => {
    return (
        cartBtn && (
        <div className='text-center py-15 bg-violet-800'>
            <h1 className='text-3xl font-semibold mb-3 text-gray-200'>Ready to Transform Your Workflow?</h1>
            <p className='text-gray-400 text-sm'>Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
            <div className='flex gap-4 justify-center mt-6'>
            <button className='h-10 bg-gray-100 text-violet-800 text-xs rounded-full mt-4 w-34 font-normal'>Explore Products</button>
            <button className='h-10 bg-violet-800 text-gray-300 text-xs font-normal rounded-full mt-4 w-34 border border-white/40'>View Pricing</button>
            </div>

            <div>
                <ul className=' text-gray-400 text-sm  mt-6 flex gap-0.5 items-center justify-center'>
                    <li>14-day free trial</li>
                     <span>•</span>
                    <li>No credit card required</li>
                     <span>•</span>
                    <li>Cancel anytime</li>
                </ul>
            </div>
        </div>
        )
    );
};

export default TransformWorkflow;