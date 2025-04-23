import BlogIcon from 'assets/icons/blog-icon.svg?react';
import ContactsIcon from 'assets/icons/contacts-icon.svg?react';
import ContributionIcon from 'assets/icons/contribution-icon.svg?react';
import HelpIcon from 'assets/icons/help-icon.svg?react';
import MapIcon from 'assets/icons/map-icon.svg?react';
import NewsIcon from 'assets/icons/news-icon.svg?react';
import WomanIcon from 'assets/icons/woman-icon.svg?react';

type MenuVariant = 'desktop' | 'burger' | 'popover';

export interface MenuItems {
  id: string;
  icon: React.ComponentType;
  label: string;
  variants: MenuVariant[];
}

export const menuItems: MenuItems[] = [
  {
    id: 'help',
    icon: HelpIcon,
    label: 'Помощь',
    variants: [
      'desktop',
      'popover',
      'burger',
    ],
  },
  {
    id: 'contribution',
    icon: ContributionIcon,
    label: 'Наш вклад в общество',
    variants: [
      'desktop',
      'popover',
      'burger',
    ],
  },
  {
    id: 'news',
    icon: NewsIcon,
    label: 'Новости',
    variants: [
      'desktop',
      'popover',
      'burger',
    ],
  },
  {
    id: 'contacts',
    icon: ContactsIcon,
    label: 'Контакты',
    variants: [
      'desktop',
      'popover',
      'burger',
    ],
  },
  {
    id: 'blog', icon: BlogIcon, label: 'Блог. Для дела', variants: ['desktop', 'popover'],
  },
  {
    id: 'woman', icon: WomanIcon, label: 'Женское дело', variants: ['burger'],
  },
  {
    id: 'map', icon: MapIcon, label: 'Карта отделений', variants: ['burger'],
  },
];

export interface MenuProps {
  variant?: 'desktop' | 'burger' | 'popover';
}
