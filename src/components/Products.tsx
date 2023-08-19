import useProducts from 'hooks/useProducts';
import ProductCard from './ProductCard';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>error</p>}

      <ul className='grid grid-cols-1 gap-4 py-4 md:grid-cols-3 lg:grid-cols-4'>
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
