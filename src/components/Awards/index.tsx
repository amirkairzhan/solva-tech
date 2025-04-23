import type { FC } from 'react';
import { awardsItems } from 'components/Awards/config';

const Awards: FC = () => (
  <section className="awards-section section">
    <h2 className="section-title">Наши награды</h2>
    <div className="awards-list">
      {awardsItems.map((award) => (
        <div key={award.alt} className="awards-item">
          <img alt={award.alt} className="awards-img" src={award.img} />
          <p className="awards-text">{award.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Awards;
