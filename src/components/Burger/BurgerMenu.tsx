import type { FC } from 'react';
import Menu from 'components/Menu';
import ContactsInfo from 'components/shared/ContactsInfo';
import LangBtn from 'components/shared/LangBtn';
import Socials from 'components/shared/Socials';
import { burgerMenuCoopItems } from 'components/Burger/config';
import AppstoreIcon from 'assets/icons/appstore-dark-icon.svg?react';
import GoogleIcon from 'assets/icons/google-dark-icon.svg?react';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg?react';

const BurgerMenu: FC = () => (
  <div className="burger-menu">
    <ul className="burger-cooperations-list">
      {burgerMenuCoopItems.map(({
        id, icon: Icon, label, withSubmenu,
      }) => (
        <li key={id} className="burger-cooperation">
          {label}
          {withSubmenu ? <Icon /> : ''}
        </li>
      ))}
    </ul>

    <Menu variant="burger" />

    <div className="burger-info">
      <ContactsInfo />
      <LangBtn text="RU" />
    </div>

    <hr className="burger-line" />

    <div className="burger-whatsapp">
      <WhatsAppIcon />
      <p>Написать в Whats App</p>
    </div>

    <div className="burger-socials">
      <div className="burger-download">
        <AppstoreIcon />
        <GoogleIcon />
      </div>
      <Socials />
    </div>
  </div>
);

export default BurgerMenu;
