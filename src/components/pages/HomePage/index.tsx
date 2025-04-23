import React, { type FC } from 'react';
// components
import Awards from 'components/Awards';
import Banner from 'components/Banner';
import Calculator from 'components/Calculator';
import Footer from 'components/layout/Footer';
import Menu from 'components/Menu';
import Mobile from 'components/Mobile';
import Payment from 'components/Payment';
import Products from 'components/Products';

const HomePage: FC = () => (
  <main>
    <Banner />
    <Menu />
    <Products />
    <Calculator />
    <Mobile />
    <Awards />
    <Payment />
    <Footer />
  </main>
);

export default HomePage;
