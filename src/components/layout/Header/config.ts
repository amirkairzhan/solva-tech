import type { ComponentType } from 'react';
import PopoverBusiness from 'components/Popover/PopoverBusiness';
import PopoverIndividuals from 'components/Popover/PopoverIndividuals';

export interface HeaderProps {
  isBurgerOpen: boolean;
  toggleMenu: () => void;
}

export interface HeaderMenuItem {
  title: string;
  withPopover: boolean;
  popover?: ComponentType;
}

export const headerCoopList: HeaderMenuItem[] = [
  {
    title: 'Частным лицам',
    withPopover: true,
    popover: PopoverIndividuals,
  },
  {
    title: 'Бизнесу',
    withPopover: true,
    popover: PopoverBusiness,
  },
  {
    title: 'Инвесторам',
    withPopover: false,
  },
];
