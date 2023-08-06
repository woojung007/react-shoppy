import React from 'react';

type ButtonProps = {
  text?: string;
  onClick: () => void;
  children?: React.ReactNode;
};

export default function Button({ text, onClick, children }: ButtonProps) {
  return (
    <button
      // className='px-4 py-2 text-white rounded-sm bg-brand hover:brightness-110'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
