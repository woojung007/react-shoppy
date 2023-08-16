import React, { MouseEvent } from 'react';

type ButtonProps = {
  text?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  disabled,
  children,
}: ButtonProps) {
  return (
    <button
      className={
        'px-4 py-2 text-white rounded-sm bg-brand hover:brightness-110'
      }
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
}
