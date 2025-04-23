import type { FC } from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton: FC<BurgerButtonProps> = ({ onClick, isOpen }) => (
  <button className={`burger${isOpen ? ' open' : ''}`} onClick={onClick}>
    <span />
    <span />
    <span />
  </button>
);

export default BurgerButton;
