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
  const { isMobileView } = useIsMobileView();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedIcon, setDisplayedIcon] = useState('Hamburger')

  /* Closing the menu when screen has changed to desktop view, enabling the scroll and setting menu icon to hamburger,
  so when user comes back to the MobileView, the hamburger icon is displayed */
  useEffect(() => {
    if (!isMobileView && isMenuOpen) {
      setIsMenuOpen(false);
      setDisplayedIcon("Hamburger")
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileView, isMenuOpen])

  /* Enabling or disabling the scroll on website depending on whether the menu is opened or not */
  useEffect(() => {
    if (isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen])

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(prev => !prev);
  }

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
    { text: 'Our product', type: 'text', onClick: () => navigate('/Solomon') },
    { text: 'About us', type: 'text', onClick: () => navigate('/AboutUs') },
    { text: "Let's talk", type: 'button', onClick: () => handleLetsTalkButtonClick() },
  ];

  return (
    <header>
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
