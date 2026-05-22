import React from 'react';
import Left from './Left';
import Right from './Right';

const Hero = ( { cartBtn } ) => {
    return (
        cartBtn && (
            <div className='max-w-6xl mx-auto my-12 flex items-center pr-4 pl-3.5 flex-col-reverse sm:flex-row gap-10'>
                <Left></Left>
                <Right></Right>
            </div>
        )
    );
};

export default Hero;