import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TopPage } from './presentation/pages/TopPage';
import { ColumnPage } from './presentation/pages/ColumnPage';
import { ASSETS } from './shared/constants/assets';
import { MyRecord } from './presentation/pages/MyRecord';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  position: relative;
`;

const ScrollButton = styled.button`
  position: absolute;
  right: 96px;
  bottom: 272px;
  width: 48px;
  height: 48px;
  border: 1px solid #777777;
  border-radius: 50%;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-50%) scale(1);
  }
`;

const Navigation = styled.nav`
  background-color: #414141;
  padding: 0;
`;

const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 160px;
  height: 64px;
  color: #414141;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;
const HomeNavLink = styled(Link)`
  img {
    width: 109px;
    height: 40px;
  }
`;
const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 300;
  font-size: 16px;
  line-height: 23px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  border-radius: 4px;
  position: relative;
  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    color: #FF963C;
  }

  &.active {
    color: #FF963C;
  }
`;

const NavLinkBadge = styled.div`
  width: 16px;
  height: 16px;
  background-color: #FF963C;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 12px;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 16px;
  img {
    width: 32px;
    height: 32px;
  }
`;

const Main = styled.main`
  padding: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 160px;
  height: 128px;
  color: #414141;
`;
const FooterNavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 45px;
`;

const SidebarOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
}) <{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const Sidebar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
}) <{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  background: transparent;
  z-index: 1001;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  height: 96px;
  display: flex;
  align-items: end;
  justify-content: end;
  background: transparent;
`;

const CloseButton = styled.button`
  background: #414141;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 23px 32px;
  border-bottom: 1px solid #2E2E2E;
  border-top: 1px solid #FFFFFF;
  width: 280px;
  height: 70px;
  background: #777777;
`;

const MenuLink = styled(Link)`
  display: block;
  padding: 0;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  transition: background 0.3s ease;
  font-family: 'Hiragino Kaku Gothic Pro';

  &:hover {
    color: #FF963C;
  }
`;

const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: '自分の記録' },
    { path: '/weight-graph', label: '体重グラフ' },
    { path: '/goals', label: '目標' },
    { path: '/course', label: '選択中のコース' },
    { path: '/column', label: 'コラム一覧' },
    { path: '/settings', label: '設定' }
  ];

  const navigators = [
    { path: '/', label: '自分の記録', icon: '/icons/menu_top.svg' },
    { path: '/my-record', label: 'チャレンジ', icon: '/icons/menu_top_1.svg' },
    { path: '/column', label: 'お知らせ', icon: '/icons/menu_top_2.svg', badge: 1 },
  ];

  const footernavigators = [
    { path: '/nothing', label: '会員登録' },
    { path: '/weight-graph', label: '運営会社' },
    { path: '/goals', label: '利用規約' },
    { path: '/course', label: '個人情報の取扱について' },
    { path: '/column', label: '特定商取引法に基づく表記' },
    { path: '/settings', label: 'お問い合わせ' }
  ];

  return (
    <AppContainer>
      <ScrollButton>
        <img src={ASSETS.ICONS.UP} alt="Scroll" />
      </ScrollButton>
      <Navigation>
        <NavContainer>
          <Logo>
            <HomeNavLink to="/">
              <img src={ASSETS.IMAGES.LOGO} alt="Logo" />
            </HomeNavLink>
          </Logo>
          <NavList>
            {navigators.map((navigator, index) => (
              <NavItem key={index}>
                <NavLink 
                  to={navigator.path}
                  className={location.pathname === navigator.path ? 'active' : ''}
                >
                  <img src={navigator.icon} alt={navigator.label} />
                  {navigator.label}
                  {navigator.badge && navigator.badge > 0 &&
                    <NavLinkBadge>
                      <span>{navigator.badge}</span>
                    </NavLinkBadge>}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <HamburgerMenu onClick={toggleMenu}>
                <img src={ASSETS.ICONS.MENU} alt="Menu" />
              </HamburgerMenu>
            </NavItem>
          </NavList>
        </NavContainer>
      </Navigation>

      <Main>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/my-record" element={<MyRecord />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
      </Main>
      <Navigation>
        <FooterContainer>
          <FooterNavList>
            {footernavigators.map((navigator, index) => (
              <NavItem key={index}>
                <NavLink 
                  to={navigator.path}
                  className={location.pathname === navigator.path ? 'active' : ''}
                >
                  {navigator.label}
                </NavLink>
              </NavItem>
            ))}
          </FooterNavList>
        </FooterContainer>
      </Navigation>

      {/* Sidebar Menu */}
      <SidebarOverlay isOpen={isMenuOpen} onClick={closeMenu} />
      <Sidebar isOpen={isMenuOpen}>
        <SidebarHeader>
          <CloseButton onClick={closeMenu}>
            <img src={ASSETS.ICONS.CLOSE} alt="Close" />
          </CloseButton>
        </SidebarHeader>
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <MenuLink 
                to={item.path} 
                onClick={closeMenu}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </Sidebar>
    </AppContainer>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
