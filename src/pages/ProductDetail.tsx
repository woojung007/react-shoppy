import { addOrUpdateToCart } from 'api/firebase';
import Button from 'components/ui/Button';
import { useAuthContext } from 'context/AuthContext';
import { ChangeEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProduct } from 'types/cart.types';

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const { uid } = useAuthContext();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  // 장바구니에 추가
  const handleClick = () => {
    const product: CartProduct = {
      id,
      image,
      title,
      price,
      option: selected,
      quantity: 1,
    };
    addOrUpdateToCart(uid, product);
  };

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>

      <section className='flex flex-col w-full p-4 md:flex-row'>
        <img className='w-7/12 px-4 basis-7/12' src={image} alt={title} />

        <div className='flex flex-col w-full p-4 basis-5/12'>
          <h2 className='py-2 text-3xl font-bold'>{title}</h2>
          <p className='py-2 text-2xl font-bold border-b border-gray-400'>
            ₩{price}
          </p>
          <p className='py-4 text-lg'>{description}</p>

          <div className='flex items-center'>
            <label className='font-bold text-slate-700' htmlFor='select'>
              옵션:
            </label>
            <select
              id='select'
              className='flex-1 p-2 m-4 border outline-none border-slate-700'
              onChange={handleSelect}
              value={selected}
            >
              {/* 동적으로 변경되지 않으므로 key를 index를 key로 사용해도 된다. */}
              {options &&
                options.map((option: string, index: number) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>

          <Button text='장바구니에 추가' onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
