import type { FC } from 'react';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import BurgerButton from 'components/Burger/BurgerButton';
import LangBtn from 'components/shared/LangBtn';
import { headerCoopList, type HeaderProps } from 'components/layout/Header/config';
import Point from 'assets/icons/point-icon.svg?react';
import logoSolva from 'assets/images/logo-solva.png';

const Header: FC<HeaderProps> = ({ toggleMenu, isBurgerOpen }) => (
  <header className="header">
    <div className="header-content">
      <BurgerButton isOpen={isBurgerOpen} onClick={toggleMenu} />
      <img alt="SOLVA" className="logo-solva" src={logoSolva} />
      <div className="head-content">
        <ul className="header-cooperation-list">
          {headerCoopList.map(({ title, withPopover, popover: PopoverComponent }) => (
            <li key={title} className="header-cooperation-item">
              {withPopover ? (
                <Popover
                  content={<PopoverComponent />}
                  interactionKind={PopoverInteractionKind.CLICK}
                  position={Position.BOTTOM}
                >
                  <span>{title}</span>
                </Popover>
              ) : (
                <span>{title}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="head-info">
          <div className="head-map">
            <Point />
            <p className="head-map-text">Карта отделений</p>
          </div>
          <LangBtn text="KZ" />
          <button className="login-btn">Войти</button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
