import { LucideIcon } from 'lucide-react';

export type NavigationItem = {
    id: string;
    label: string;
    icon: LucideIcon;
    href: string;
    divider?: never;
};

export type DividerItem = {
    divider: true;
    id?: never;
    label?: never;
    icon?: never;
    href?: never;
};