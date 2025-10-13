'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { useState } from 'react';
import { Permission } from '../types/enums';
import type { Role } from '../types/schema';
import { PermissionCheckbox } from './PermissionCheckbox';
import { RoleActionsCell } from './RoleActionsCell';

interface RolesTableProps {
  initialRoles: Role[];
}

const PERMISSION_LABELS: Record<Permission, string> = {
  [Permission.Read]: 'Read',
  [Permission.Write]: 'Write',
  [Permission.Delete]: 'Delete',
  [Permission.ManageUsers]: 'Manage Users',
  [Permission.ManageSettings]: 'Manage Settings'
};

const ALL_PERMISSIONS = Object.values(Permission);

export function RolesTable({ initialRoles }: RolesTableProps) {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  const handlePermissionToggle = (
    roleId: string,
    permission: Permission,
    checked: boolean
  ) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) => {
        if (role.id === roleId) {
          const updatedPermissions = checked
            ? [...role.permissions, permission]
            : role.permissions.filter((p) => p !== permission);
          return { ...role, permissions: updatedPermissions };
        }
        return role;
      })
    );
  };

  const handleEdit = (roleId: string) => {
    // TODO: Implement edit functionality
    console.log('Edit role:', roleId);
  };

  const handleDelete = (roleId: string) => {
    // TODO: Implement delete functionality
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleId));
  };

  return (
    <div className='rounded-lg border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[150px]'>Role Name</TableHead>
            <TableHead className='w-[250px]'>Description</TableHead>
            {ALL_PERMISSIONS.map((permission) => (
              <TableHead key={permission} className='text-center'>
                {PERMISSION_LABELS[permission]}
              </TableHead>
            ))}
            <TableHead className='w-[120px] text-center'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell className='font-medium capitalize'>
                {role.name}
              </TableCell>
              <TableCell className='text-muted-foreground text-sm'>
                {role.description}
              </TableCell>
              {ALL_PERMISSIONS.map((permission) => (
                <TableCell key={permission} className='text-center'>
                  <div className='flex justify-center'>
                    <PermissionCheckbox
                      roleId={role.id}
                      permission={permission}
                      isChecked={role.permissions.includes(permission)}
                      onToggle={handlePermissionToggle}
                    />
                  </div>
                </TableCell>
              ))}
              <TableCell className='text-center'>
                <RoleActionsCell
                  roleId={role.id}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
