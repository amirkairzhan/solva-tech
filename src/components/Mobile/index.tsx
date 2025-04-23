import type { FC } from 'react';
import AppstoreIcon from 'assets/icons/appstore-icon.svg?react';
import GoogleIcon from 'assets/icons/google-icon.svg?react';

const Mobile: FC = () => (
  <section className="mobile-section section">
    <div className="mobile-text">
      <h2 className="mobile-title">Мобильное приложение Solva</h2>
      <p className="mobile-desc">Простой способ подать заявку на микрокредит и погашать платежи – в вашем смартфоне</p>
    </div>
    <div className="mobile-links">
      <GoogleIcon />
      <AppstoreIcon />
    </div>
  </section>
);

export default Mobile;
