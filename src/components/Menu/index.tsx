import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { menuItems, type MenuProps } from 'components/Menu/config';

const Menu: FC<MenuProps> = ({ variant = 'desktop' }) => {
  const sectionClass = `menu-section menu-section--${variant}`;
  const listClass = `menu-list menu-list--${variant}`;
  const itemClass = `menu-item menu-item--${variant}`;

  const filteredItems = menuItems.filter((item) => item.variants.includes(variant));

  return (
    <section className={sectionClass}>
      <ul className={listClass}>
        {filteredItems.map(({ id, icon: Icon, label }) => (
          <li key={id}>
            <Link className={itemClass} to={`/${id}`}>
              <Icon />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
