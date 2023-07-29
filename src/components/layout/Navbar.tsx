import { getAdmins, login, logout, onUserStateChange } from 'api/firebase';
import UserProfile from 'components/User';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FaShopify } from 'react-icons/fa';
import { HiPencil, HiShoppingCart } from 'react-icons/hi';
import { RiAccountCircleFill, RiLogoutCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onUserStateChange(setUser);
    getAdmins();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

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

        {user && <UserProfile user={user} />}

        {!user && (
          <button onClick={login} className='text-3xl'>
            <RiAccountCircleFill />
          </button>
        )}

        {user && (
          <button onClick={logout} className='text-3xl'>
            <RiLogoutCircleLine />
          </button>
        )}
      </nav>
    </header>
  );
}
