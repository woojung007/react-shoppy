import UserProfile from 'components/User';
import { useAuthContext } from 'components/context/AuthContext';
import Button from 'components/ui/Button';
import { FaShopify } from 'react-icons/fa';
import { HiPencil, HiShoppingCart } from 'react-icons/hi';
import { RiAccountCircleFill, RiLogoutCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between p-2 border-b border-gray-300'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FaShopify />
        <h1>Shoppy</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>

        {user && (
          <Link to='/carts' className='text-3xl'>
            <HiShoppingCart />
          </Link>
        )}

        {user && user.isAdmin && (
          <Link to='/products/new' className='text-3xl'>
            <HiPencil />
          </Link>
        )}

        {user && <UserProfile user={user} />}

        {!user && (
          <Button text='Login' onClick={login}>
            <RiAccountCircleFill size={23} />
          </Button>
        )}

        {user && (
          <Button text='Logout' onClick={logout}>
            <RiLogoutCircleLine size={23} />
          </Button>
        )}
      </nav>
    </header>
  );
}
