import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hoverable = false, onClick }: CardProps) {
  const hoverStyles = hoverable ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
