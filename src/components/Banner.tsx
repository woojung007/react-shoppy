import React from 'react';

export default function Banner() {
  return (
    <section className='relative bg-yellow-900 h-96'>
      <div className='w-full h-full bg-cover opacity-75 bg-banner' />
      <div className='absolute w-full text-center top-32 text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl'>Shop With Us</h2>
        <p className='text-2xl'>Best Products, High Quality</p>
      </div>
    </section>
  );
}
