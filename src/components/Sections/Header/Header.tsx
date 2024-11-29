import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFormContext from '../../../hooks/useFormContext';

import Logo from './components/Logo';
import Navbar from './components/Navbar';

import { NavbarOption } from './interfaces/interfaces';

import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { displayedFormContent, setIsFormDisplayed } = useFormContext();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollingToSolomon = () => {
    const currentPath = window.location.pathname;

    const scrollToSolomon = () => {
      const targetComponent = document.getElementById('solomon');
      if (targetComponent) {
        const offset = 100;
        const elementPosition = targetComponent.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (currentPath === '/') {
      scrollToSolomon();
    } else {
      navigate('/');
      setTimeout(scrollToSolomon, 500);
    }
  };

  const navbarOptions: NavbarOption[] = [
    { text: 'Our product', type: 'text', onClick: () => handleScrollingToSolomon() },
    { text: 'About us', type: 'text', onClick: () => navigate('/AboutUs') },
    { text: "Let's talk", type: 'button', onClick: () => displayedFormContent === 'FormFields' ? setIsFormDisplayed(true) : setIsFormDisplayed(false) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    setLastScrollY(window.scrollY);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <Logo />
      <Navbar navbarOptions={navbarOptions} />
    </header>
  );
};

export default Header;
