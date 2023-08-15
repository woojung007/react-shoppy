import { addNewProduct } from 'api/firebase';
import { uploadImage } from 'api/uploader';
import Button from 'components/ui/Button';
import React, { ChangeEvent, useState } from 'react';

export type Product = {
  title: string;
  file: string;
  price: number;
  category: string;
  description: string;
  options: string;
};

export default function NewProduct() {
  const [product, setProduct] = useState<Product>({
    title: '',
    file: '',
    price: 0,
    category: '',
    description: '',
    options: '',
  });
  const [file, setFile] = useState<File | null>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) return;
    const url = await uploadImage(file);
    await addNewProduct(product, url);

    // 제품의 사진을 cloudinary에 업로드 하고 url을 획득
    // firebase에 새로운 제품을 추가함
  };

  const handleClick = () => {};
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt='local file' />}

      <form onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />

        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='제품명'
          required
          onChange={handleChange}
        />

        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />

        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />

        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />

        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='옵션들(콤마(,)로 구분)'
          required
          onChange={handleChange}
        />

        <Button text='제품 등록하기' onClick={handleClick} />
      </form>
    </section>
  );
}
