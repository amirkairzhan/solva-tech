import React, { type FC } from 'react';
import Menu from 'components/Menu';
import ContactsPopover from 'components/shared/ContactsPopover';
import UnionIcon from 'assets/icons/union.svg?react';

const PopoverIndividuals: FC = () => (
  <div className="popover-section popover-individuals-section">
    <div className="fragment-wrapper">
      <div className="solva-card-wrapper">
        <div className="solva-card">
          <UnionIcon />
          <p>Solva Карта</p>
        </div>
        <a className="popover-link" href="/">Рефинансирование кредита</a>
        <a className="popover-link" href="/">Микрокредит онлайн</a>
      </div>
      <ContactsPopover />
    </div>
    <Menu variant="popover" />
  </div>
);

export default PopoverIndividuals;
