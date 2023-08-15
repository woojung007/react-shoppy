export const uploadImage = async (file: File) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET ?? '');
  const res = await fetch(process.env.REACT_APP_CLOUDINARY_URL ?? '', {
    method: 'POST',
    body: data,
  });

  const result = await res.json();

  return result.url;
};
