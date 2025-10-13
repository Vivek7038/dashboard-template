// Props types (data passed to components)
export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

export interface RolesPageProps {
  roles: Role[];
}
