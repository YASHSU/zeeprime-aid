
import React from 'react';
import { cn } from "@/lib/utils";

type CategoryType = 'medical' | 'disaster' | 'accident' | 'education' | 'family' | 'other';

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
}

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  const categories: Record<CategoryType, { label: string; className: string }> = {
    medical: {
      label: 'Medical',
      className: 'bg-red-100 text-red-800',
    },
    disaster: {
      label: 'Disaster',
      className: 'bg-orange-100 text-orange-800',
    },
    accident: {
      label: 'Accident',
      className: 'bg-amber-100 text-amber-800',
    },
    education: {
      label: 'Education',
      className: 'bg-blue-100 text-blue-800',
    },
    family: {
      label: 'Family',
      className: 'bg-indigo-100 text-indigo-800',
    },
    other: {
      label: 'Other',
      className: 'bg-gray-100 text-gray-800',
    }
  };

  const { label, className: categoryClassName } = categories[category];

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      categoryClassName,
      className
    )}>
      {label}
    </span>
  );
};

export default CategoryBadge;
