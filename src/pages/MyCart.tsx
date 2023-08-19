import CartItem from 'components/CartItem';
import PriceCard from 'components/PriceCard';
import Button from 'components/ui/Button';
import useCart from 'hooks/useCart';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { data: products, isLoading },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  const totalPrice = Number(
    products &&
      products.reduce(
        (prev: any, current: any) =>
          prev + parseInt(current.price) * current.quantity,
        0
      )
  );
  return (
    <section className='flex flex-col p-8'>
      <p className='pb-4 text-2xl font-bold text-center border-b border-gray-300'>
        내 장바구니
      </p>
      {!hasProducts && <p> 장바구니에 상품이 없습니다.</p>}

      {hasProducts && (
        <>
          <ul className='p-4 px-8 mb-8 border-b border-gray-300'>
            {products &&
              products.map((product: any) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>

          <div className='flex items-center justify-between p-2 mb-6 md:px-8 lg:px-16'>
            <PriceCard text='상품 총액' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='배송액' price={SHIPPING} />
            <FaEquals className='shrink-0' />
            <PriceCard text='총가격' price={totalPrice + SHIPPING} />
          </div>

          <Button text='주문하기' />
        </>
      )}
    </section>
  );
}
