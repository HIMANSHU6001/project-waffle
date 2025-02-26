import React, { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { HN_LOGO, NAVBAR_LINKS } from '@/config/content/marginals';
import { handleRedirect } from '@/utils/handleRedirect';

import MobileNav from './mobile-navbar';
import {
  DesktopNavbar,
  DesktopNavbarLinks,
  HNLogo,
  NavbarContainer,
  NavbarLink,
  NavbarWrapper,
  ToggleButton,
} from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const navbarHeight = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <NavbarContainer className={isOpen && '!rounded-none !pb-0'}>
      <NavbarWrapper>
        <HNLogo
          src={HN_LOGO}
          alt='HN Logo'
          className='md:w-20 w-14 md:h-20 h-14 p-1'
          width={70}
          height={70}
          onClick={() => handleRedirect('/')}
        />
        <DesktopNavbar>
          <DesktopNavbarLinks>
            {NAVBAR_LINKS.map((link) => (
              <NavbarLink
                key={link.text}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.text}
              </NavbarLink>
            ))}
          </DesktopNavbarLinks>
        </DesktopNavbar>

        <ToggleButton onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </ToggleButton>
      </NavbarWrapper>

      <MobileNav
        isOpen={isOpen}
        navLinks={NAVBAR_LINKS}
        handleClose={() => setIsOpen(false)}
        handleNavClick={handleNavClick}
      />
    </NavbarContainer>
  );
};

export default Navbar;
