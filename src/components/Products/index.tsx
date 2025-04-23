import type { FC } from 'react';
import Button from 'components/shared/Button';
import { productsList } from 'components/Products/config';

const Products: FC = () => (
  <section className="products-section section">
    <h2 className="section-title">Рекомендуемые продукты</h2>
    <div className="products-list">
      {productsList.map((product) => (
        <div key={product.id} className={product.className}>
          <h3 className="product-title">{product.title}</h3>
          <div className="product-desc-wrapper">
            <p className="product-desc">
              <span className="product-price">{product.price}</span>
              {product.description}
            </p>
            <Button className="product-btn" text={product.button} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
