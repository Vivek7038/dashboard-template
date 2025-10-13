import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { RolesTable } from '@/features/roles/components/RolesTable';
import { mockRootProps } from '@/features/roles/data/rolesMockData';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard: User Roles'
};

export default function UserRolesPage() {
  return (
    <PageContainer scrollable>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading
            title='User Roles'
            description='Manage user roles and permissions'
          />
          <Link
            href='/dashboard/roles/new'
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className='mr-2 h-4 w-4' /> Add Role
          </Link>
        </div>
        <Separator />
        <RolesTable initialRoles={mockRootProps.roles} />
      </div>
    </PageContainer>
  );
}
