import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <FaShopify />
        <h1>Shoppy</h1>
      </Link>

      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products'>Products</Link>
        <Link to='/products/new'>
          <HiPencil />
        </Link>

        <button>Login</button>
      </nav>
    </header>
  );
}
