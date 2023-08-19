import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/firebase';
import ProductCard from './ProductCard';
import useProducts from 'hooks/useProducts';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

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
