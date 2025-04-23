import ArrowIcon from 'assets/icons/arrow-icon.svg?react';

export interface BurgerMenuItem {
  id: string;
  icon: React.ComponentType;
  label: string;
  withSubmenu?: boolean;
}

export const burgerMenuCoopItems: BurgerMenuItem[] = [
  {
    id: '1', icon: ArrowIcon, label: 'Частным Лицам', withSubmenu: true,
  },
  {
    id: '2', icon: ArrowIcon, label: 'Бизнесу', withSubmenu: true,
  },
  {
    id: '3', icon: ArrowIcon, label: 'Инвесторам', withSubmenu: false,
  },
  {
    id: '4', icon: ArrowIcon, label: 'Блог.Для дела', withSubmenu: true,
  },
];
