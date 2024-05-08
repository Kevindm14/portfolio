import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`w-[350px] md:w-[900px] xl:w-[1200px] mx-auto ${className}`}>{children}</div>;
};
