import type { ComponentType } from 'react';
import BlogPage from 'components/pages/BlogPage';
import ContactsPage from 'components/pages/ContactsPage';
import ContributionPage from 'components/pages/ContributionPage';
import ContributionTypePage from 'components/pages/ContributionTypePage';
import HelpPage from 'components/pages/HelpPage';
import HomePage from 'components/pages/HomePage';
import NewsPage from 'components/pages/NewsPage';

export interface RouteType {
  path: string;
  component: ComponentType;
}

export const routes: RouteType[] = [
  { path: '/solva-tech', component: HomePage },
  { path: '/help', component: HelpPage },
  { path: '/contribution', component: ContributionPage },
  { path: '/contribution/:contributionType', component: ContributionTypePage },
  { path: '/news', component: NewsPage },
  { path: '/blog', component: BlogPage },
  { path: '/contacts', component: ContactsPage },
];
