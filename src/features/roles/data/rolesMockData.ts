import { Permission, RoleType } from '../types/enums';

// Data passed as props to the root component
export const mockRootProps = {
  roles: [
    {
      id: '1',
      name: RoleType.Admin,
      description: 'Full system access with all permissions',
      permissions: [
        Permission.Read,
        Permission.Write,
        Permission.Delete,
        Permission.ManageUsers,
        Permission.ManageSettings
      ]
    },
    {
      id: '2',
      name: RoleType.Manager,
      description: 'Can manage users and content',
      permissions: [
        Permission.Read,
        Permission.Write,
        Permission.Delete,
        Permission.ManageUsers
      ]
    },
    {
      id: '3',
      name: RoleType.Editor,
      description: 'Can create and edit content',
      permissions: [Permission.Read, Permission.Write]
    },
    {
      id: '4',
      name: RoleType.Viewer,
      description: 'Read-only access to content',
      permissions: [Permission.Read]
    }
  ]
};
