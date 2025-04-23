import type { FC } from 'react';
import FacebookIcon from 'assets/icons/facebook-icon.svg?react';
import InstagramIcon from 'assets/icons/instagram-icon.svg?react';
import LinkedinIcon from 'assets/icons/linkedin-icon.svg?react';
import TelegramIcon from 'assets/icons/telegram-icon.svg?react';

const Socials: FC = () => (
  <div className="socials">
    <InstagramIcon />
    <FacebookIcon />
    <LinkedinIcon />
    <TelegramIcon />
  </div>
);

export default Socials;
