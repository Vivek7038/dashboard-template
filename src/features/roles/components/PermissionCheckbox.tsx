'use client';

import { Checkbox } from '@/components/ui/checkbox';
import type { Permission } from '../types/enums';

interface PermissionCheckboxProps {
  roleId: string;
  permission: Permission;
  isChecked: boolean;
  onToggle: (roleId: string, permission: Permission, checked: boolean) => void;
}

export function PermissionCheckbox({
  roleId,
  permission,
  isChecked,
  onToggle
}: PermissionCheckboxProps) {
  return (
    <Checkbox
      checked={isChecked}
      onCheckedChange={(checked) =>
        onToggle(roleId, permission, checked as boolean)
      }
    />
  );
}
