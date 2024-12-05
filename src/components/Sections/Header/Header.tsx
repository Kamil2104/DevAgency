import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFormContext from '../../../hooks/useFormContext';
import useIsMobileView from '../../../hooks/useIsMobileView';

import Logo from './components/Logo';
import Navbar from './components/Navbar';
import NavbarMobileView from './components/NavbarMobileView';
import Menu from './components/Menu';

import { NavbarOption } from './interfaces/interfaces';

import './Header.css';
import './HeaderResponsiveness.css'

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { displayedFormContent, setIsFormDisplayed } = useFormContext();
  const isMobileView = useIsMobileView();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedIcon, setDisplayedIcon] = useState('Hamburger')

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        document.body.classList.add('no-scroll');
      }, 300);
    } else {
      const timer = setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 300);

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen])

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(prev => !prev);
  }

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

  const handleLetsTalkButtonClick = () => {
    if (displayedFormContent === 'FormFields') {
      setIsFormDisplayed(true);
    } else {
      setIsFormDisplayed(false);
    }

    setTimeout(() => {
      setIsMenuOpen(false)
      setDisplayedIcon("Hamburger")
    }, 400);
  }

  const navbarOptions: NavbarOption[] = [
    { text: 'Our product', type: 'text', onClick: () => handleScrollingToSolomon() },
    { text: 'About us', type: 'text', onClick: () => navigate('/AboutUs') },
    { text: "Let's talk", type: 'button', onClick: () => handleLetsTalkButtonClick() },
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
      <section className='row'>
        <Logo />
        {isMobileView
          ? <NavbarMobileView toggleIsMenuOpen={toggleIsMenuOpen} displayedIcon={displayedIcon} setDisplayedIcon={setDisplayedIcon} />
          : <Navbar navbarOptions={navbarOptions} />
        }
      </section>
      {isMobileView && <Menu navbarOptions={navbarOptions} isMenuOpen={isMenuOpen} handleButtonClick={navbarOptions[2].onClick} />}
    </header>
  );
};

export default Header;
