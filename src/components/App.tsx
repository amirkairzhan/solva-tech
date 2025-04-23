import React, { type FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BurgerMenu from 'components/Burger/BurgerMenu';
import Header from 'components/layout/Header';
import { routes, type RouteType } from 'components/routes';

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <Header isBurgerOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      {isOpen && <BurgerMenu />}
      <Routes>
        {routes.map((route: RouteType) => {
          const Component = route.component;

          return (
            <Route key={route.path} element={<Component />} path={route.path} />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
