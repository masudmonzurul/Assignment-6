import { Check } from 'lucide-react';
import React from 'react';

const PricingContainer = ({ cartBtn }) => {
    return (
        cartBtn && (
            <div className='text-center py-15 '>
                <h2 className='text-3xl font-semibold mb-3'>Simple, Transparent Pricing</h2>
                <p className="text-center text-sm text-gray-500 pb-6">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='flex gap-3 mx-auto justify-center flex-wrap'>
                    <div className='bg-base-200 max-w-70 p-5 rounded-2xl text-left w-1/3 mt-3'>
                        <h2 className='text-left'>Starter</h2>
                        <p className='text-left text-gray-500 text-sm mt-3 mb-4'>Perfect for getting started</p>
                        <p className='text-left mb-3'>$0<span className='text-gray-500 text-sm'>/month</span></p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Access to 10 free tools</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Basic templates</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Community support</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> 1 project per month</p>

                        <button className="btn bg-violet-800 text-amber-50 w-full rounded-full mt-23 text-xs">Get Started Free</button>
                    </div>
                    <fieldset className='bg-violet-800 max-w-70 p-5 rounded-2xl text-left w-1/3'>
                        <legend className="relative left-1/2 -translate-x-1/2 rounded-full bg-[#FEF08A] px-4 py-0.5 text-xs  text-[#c72c11] shadow-sm">Most Popular</legend>

                        <h2 className='text-left text-white'>Pro</h2>
                        <p className='text-left text-gray-300 text-sm mt-3 mb-4'>Perfect for getting started</p>
                        <p className='text-left mb-3 text-white'>$29<span className='text-gray-300 text-sm'>/month</span></p>
                        <p className='text-left text-gray-300 text-sm'><Check className="inline-block " /> Access to all premium tools</p>
                        <p className='text-left text-gray-300 text-sm'><Check className="inline-block " /> Unlimited templates</p>
                        <p className='text-left text-gray-300 text-sm'><Check className="inline-block " /> Priority support</p>
                        <p className='text-left text-gray-300    text-sm'><Check className="inline-block " /> Unlimited projects</p>
                        <p className='text-left text-gray-300    text-sm'><Check className="inline-block " />Cloud sync</p>
                        <p className='text-left text-gray-300    text-sm'><Check className="inline-block " /> Advanced analytics</p>

                        <button className="btn bg-white text-violet-800 w-full rounded-full mt-8 text-xs">Get Started Free</button>
                    </fieldset>
                    <div className='bg-base-200 max-w-70 p-5 rounded-2xl text-left w-1/3 mt-3'>
                        <h2 className='text-left'>Enterprise</h2>
                        <p className='text-left text-gray-500 text-sm mt-3 mb-4'>For teams and businesses</p>
                        <p className='text-left mb-3'>$99<span className='text-gray-500 text-sm'>/month</span></p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Everything in Pro</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Team collaboration</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Custom integrations</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Dedicated support</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> SLA guarantee</p>
                        <p className='text-left text-gray-500 text-sm'><Check className="inline-block  text-green-500" /> Custom branding</p>

                        <button className="btn bg-violet-800 text-amber-50 w-full rounded-full mt-13 text-xs">Get Started Free</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default PricingContainer;