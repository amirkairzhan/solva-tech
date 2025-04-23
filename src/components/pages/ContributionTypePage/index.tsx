import React, { type FC } from 'react';
import { Link, useParams } from 'react-router-dom';
// components
import Menu from 'components/Menu';

type ContributionType = 'employee' | 'corporate';

const ContributionTypePage: FC = () => {
  const { contributionType } = useParams<{ contributionType: ContributionType }>();

  const contributionTitles: Record<ContributionType, string> = {
    employee: 'Вклад сотрудников',
    corporate: 'Корпоративный вклад',
  };

  const translatedTitle = contributionType
    ? contributionTitles[contributionType]
    : 'Неизвестный вклад';

  return (
    <main className="pages-wrapper">
      <Menu />
      <h1 className="pages-title">
        Наш вклад в общество:
        {' '}
        {translatedTitle || contributionType}
      </h1>
      <p className="pages-path">
        Path: /contribution/
        {contributionType}
      </p>
      <Link className="menu-item" to="/solva-tech">На главную</Link>
    </main>
  );
};

export default ContributionTypePage;
