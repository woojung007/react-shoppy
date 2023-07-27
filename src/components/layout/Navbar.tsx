import { login, logout, onUserStateChange } from 'api/firebase';
import { User } from 'firebase/auth';
import { SetStateAction, useEffect, useState } from 'react';
import { FaShopify } from 'react-icons/fa';
import { HiPencil, HiShoppingCart } from 'react-icons/hi';
import { RiAccountCircleFill, RiLogoutCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onUserStateChange((user: SetStateAction<User | null>) => {
      setUser(user);
    });
  }, []);

  const handleLogin = async () => {
    const user = await login();

    if (!user) return;
    setUser(user);
  };

  const handleLogout = async () => {
    const user = await logout();
    setUser(user);
  };

  return (
    <header className='flex justify-between p-2 border-b border-gray-300'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FaShopify />
        <h1>Shoppy</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts' className='text-3xl'>
          <HiShoppingCart />
        </Link>
        <Link to='/products/new' className='text-3xl'>
          <HiPencil />
        </Link>

        {!user && (
          <button onClick={handleLogin} className='text-3xl'>
            <RiAccountCircleFill />
          </button>
        )}

        {user && (
          <button onClick={handleLogout} className='text-3xl'>
            <RiLogoutCircleLine />
          </button>
        )}
      </nav>
    </header>
  );
}
