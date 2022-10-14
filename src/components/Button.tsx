import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({
  children,
  asChild,
  className,
  ...rest
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'py-3 px-8 bg-cyan-500 rounded font-semibold text-sm text-black w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
