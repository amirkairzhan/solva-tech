import React, { type FC } from 'react';
import PhoneIcon from 'assets/icons/phone.svg?react';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg?react';

const ContactsPopover: FC = () => (
  <div className="contacts">
    <a href="https://wa.me/777010063535" rel="noreferrer" target="_blank">
      <WhatsAppIcon />
      Написать в Whats App
    </a>
    <a href="tel:+77010063535" rel="noreferrer" target="_blank">
      <PhoneIcon />
      +7 701 006-35-35
    </a>
  </div>

);

export default ContactsPopover;
