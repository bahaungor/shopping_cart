import { useState } from 'react';

// IMPORT IF THIS IS PARENT ELEMENT HOSTING CHILD ELEMENT ON ROUTER
import { Outlet } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../../components/header/header';
import Content from '../../components/content/content';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';

export default function PlainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleHamburgerClick() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <Header handleHamburgerClick={handleHamburgerClick} />
      <Content>
        {sidebarOpen && <Sidebar handleSidebarClick={handleHamburgerClick} />}
        <Outlet />
      </Content>
      <Footer />
    </>
  );
}
