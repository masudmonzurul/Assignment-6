import React from 'react';
import instagramIcon from '../../../img/Instagram.png';
import facebookIcon from '../../../img/Facebook.png';
import twitterIcon from '../../../img/Twitter.png';

const FooterBody = ({ cartBtn }) => {
    return (
        cartBtn && (

            <div className='py-15 bg-gray-800 mt-10 p-20'>
                <div className='flex gap-4 justify-between flex-wrap p-0 m-0'>
                    <div className='max-w-50'>
                        <h2 className='text-left text-2xl font-semibold mb-3 text-white '>Digitools</h2>
                        <p className='text-left text-gray-400 text-[10px] font-light'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='max-w-50 '>
                        <h2 className='text-left text-sm font-normal mb-3 text-gray-200 '>Product</h2>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Features</p>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Pricing</p>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Templates</p>
                        <p className='text-left text-gray-400 text-[10px] font-light'>Integrations</p>
                    </div>
                    <div className='max-w-50'>
                        <h2 className='text-left text-sm font-normal mb-3 text-gray-200 '>Company</h2>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>About</p>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Blog</p>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Careers</p>
                        <p className='text-left text-gray-400 text-[10px] font-light'>Press</p>
                    </div>
                    <div className='max-w-50'>
                        <h2 className='text-left text-sm font-normal mb-3 text-gray-200 '>Resources</h2>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Documentation</p>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Help Center</p>
                        <p className='text-left text-gray-400 text-[10px] font-light pb-2'>Community</p>
                        <p className='text-left text-gray-400 text-[10px] font-light'>Contact</p>
                    </div>
                    <div className='max-w-50'>
                        <h2 className='text-left text-sm font-normal mb-3 text-gray-200 '>Social Links</h2>
                        <div className='flex gap-2 justify-start'>
                            <img src={instagramIcon} alt="Instagram" className='w-6 h-6 mx-auto' />
                            <img src={facebookIcon} alt="Facebook" className='w-6 h-6 mx-auto' />
                            <img src={twitterIcon} alt="Twitter" className='w-6 h-6 mx-auto' />
                        </div>
                    </div>
                </div>

                <hr className='border-t border-gray-400 mt-18 ' />
                <div className='flex justify-between mt-6'>
            <p className='text-gray-400 text-[10px] font-light'>&copy; 2026 Digitools. All rights reserved.</p>
            <div className='flex gap-4'>
                <p className='text-gray-400 text-[10px] font-light'>Privacy Policy</p>
                <p className='text-gray-400 text-[10px] font-light'>Terms of Service</p>
                <p className='text-gray-400 text-[10px] font-light'>Cookies</p>
                
            </div>
                </div>

            </div>
        )

    );
};

export default FooterBody;