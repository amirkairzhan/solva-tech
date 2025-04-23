import type { FC } from 'react';
import ContactsInfo from 'components/shared/ContactsInfo';
import Socials from 'components/shared/Socials';
import {
  footerForBusiness,
  footerForIndividuals,
  navLinks,
} from 'components/layout/Footer/config';
import CNLogo from 'assets/images/cn-logo.svg?react';
import PCILogo from 'assets/images/pci-logo.svg?react';

const Footer: FC = () => (
  <footer className="footer">
    <div className="contacts-section">
      <Socials />
      <ContactsInfo />
    </div>

    <div className="footer-content">
      <div className="footer-cooperations">
        <div>
          <h3 className="footer-title">Частным лицам</h3>
          <ul className="footer-cooperation-list">
            {footerForIndividuals.map((item) => (
              <li key={item} className="footer-cooperation-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Для бизнеса</h3>
          <ul className="footer-cooperation-list">
            {footerForBusiness.map((item) => (
              <li key={item} className="footer-cooperation-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-logos-wrapper">
        <div className="footer-download">
          <a className="footer-download-link" href="/"> </a>
          <a className="footer-download-link" href="/"> </a>
        </div>
        <div className="footer-logos">
          <CNLogo />
          <PCILogo />
        </div>
      </div>

      <nav className="footer-nav">
        {navLinks.map((item) => (
          <a key={item.title} className="footer-nav-link" href={item.link}>{item.title}</a>
        ))}
      </nav>

      <p className="copyright">
        АО «МФО ОнлайнКазФинанс», Лицензия на осуществление микрофинансовой деятельности № 02.21.0004.М. от 06.03.2023
        года, выдана Управлением региональных представителей в городе Алматы Агентства Республики Казахстан по
        регулированию и развитию финансового рынка.
      </p>
    </div>
  </footer>
);

export default Footer;
