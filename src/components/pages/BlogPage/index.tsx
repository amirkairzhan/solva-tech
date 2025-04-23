import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
// components
import Menu from 'components/Menu';

const BlogPage: FC = () => (
  <main className="pages-wrapper">
    <Menu />
    <h1 className="pages-title">Блог. Для дела</h1>
    <p className="pages-path">Path: /blog</p>
    <Link className="menu-item" to="/solva-tech">На главную</Link>
  </main>
);

export default BlogPage;
