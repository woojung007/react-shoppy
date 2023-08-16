import { useQuery } from '@tanstack/react-query';
import { getCart } from 'api/firebase';
import { useAuthContext } from 'context/AuthContext';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));

  return (
    <div className='relative'>
      <HiShoppingCart className='text-4xl' size={23} />
      {products && (
        <p className='absolute w-5 h-5 text-sm font-bold text-center text-white rounded-full bg-brand -top-1 -right-3'>
          {products.length}
        </p>
      )}
    </div>
  );
}
