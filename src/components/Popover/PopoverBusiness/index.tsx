import React, { type FC } from 'react';
import Menu from 'components/Menu';
import ContactsPopover from 'components/shared/ContactsPopover';

const popoverLinks = {
  ip: [
    'Микрокредит для ИП',
    'Микрокредит для самозанятых',
    'Микрокредит на товары',
  ],
  too: ['Микрокредит для ТОО', 'Факторинг'],
};

const PopoverBusiness: FC = () => (
  <div className="popover-section popover-business-section">
    <div className="fragment-wrapper">
      <div className="popover-business">
        <div className="popover-business-item">
          <h3 className="popover-business-title">Для ИП и самозанятых</h3>
          {popoverLinks.ip.map((link) => (
            <a className="popover-link" href="/">{link}</a>
          ))}
        </div>
        <div className="popover-business-item">
          <h3 className="popover-business-title">Для ТОО</h3>
          {popoverLinks.too.map((link) => (
            <a className="popover-link" href="/">{link}</a>
          ))}
        </div>
      </div>
      <ContactsPopover />
    </div>
    <Menu variant="popover" />
  </div>
);

export default PopoverBusiness;
