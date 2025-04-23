import type { FC } from 'react';

const Payment: FC = () => (
  <section className="payment-section">
    <div className="payment-content">
      <h3 className="payment-title">
        Платеж можно
        <br />
        внести прямо на сайте!
      </h3>
      <button className="payment-btn">Оплатить</button>
    </div>
  </section>
);

export default Payment;
