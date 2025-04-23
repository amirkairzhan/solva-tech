import type { FC } from 'react';
import Button from 'components/shared/Button';

const Banner: FC = () => (
  <section className="banner-section">
    <h1 className="banner-title">АВТО ПО ЛАЙТУ</h1>
    <p className="banner-desc">Пользуйтесь Картой Лайт и выиграйте автомобиль и денежные призы!</p>
    <Button className="banner-btn" text="Получить карту" />
    <a className="banner-link" href="/a">Читать условия</a>
  </section>
);

export default Banner;
