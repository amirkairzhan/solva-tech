import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
// components
import Menu from 'components/Menu';
import ContributionIcon from 'assets/icons/contribution-icon.svg?react';

const ContributionPage: FC = () => (
  <main className="pages-wrapper">
    <Menu />
    <h1 className="pages-title">Наш вклад в общество</h1>
    <p className="pages-path">Path: /contribution</p>
    <Link className="menu-item" to="/contribution/employee">
      <ContributionIcon />
      Вклад сотрудников
    </Link>
    <Link className="menu-item" to="/contribution/corporate">
      <ContributionIcon />
      Корпоративный вклад
    </Link>
    <Link className="menu-item" to="/solva-tech">На главную</Link>
  </main>
);

export default ContributionPage;
