import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';
import { HiPencil, HiShoppingCart } from 'react-icons/hi';
import { RiAccountCircleFill } from 'react-icons/ri';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FaShopify />
        <h1>Shoppy</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts' className='text-2xl'>
          <HiShoppingCart />
        </Link>
        <Link to='/products/new' className='text-2xl'>
          <HiPencil />
        </Link>

        <button className='text-2xl'>
          <RiAccountCircleFill />
        </button>
      </nav>
    </header>
  );
}
