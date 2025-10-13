'use client';

import { Button } from '@/components/ui/button';
import { SquarePen, Trash } from 'lucide-react';

interface RoleActionsCellProps {
  roleId: string;
  onEdit: (roleId: string) => void;
  onDelete: (roleId: string) => void;
}

export function RoleActionsCell({
  roleId,
  onEdit,
  onDelete
}: RoleActionsCellProps) {
  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => onEdit(roleId)}
        className='h-8 w-8 p-0'
      >
        <SquarePen className='h-4 w-4' />
        <span className='sr-only'>Edit</span>
      </Button>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => onDelete(roleId)}
        className='text-destructive hover:text-destructive h-8 w-8 p-0'
      >
        <Trash className='h-4 w-4' />
        <span className='sr-only'>Delete</span>
      </Button>
    </div>
  );
}
