export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  hasCheck?: boolean;
}
