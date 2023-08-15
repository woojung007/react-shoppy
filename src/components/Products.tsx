import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery(['products'], getProducts);

  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>error</p>}

      <ul className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4'>
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
