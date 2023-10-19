import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as m } from 'framer-motion';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import Logo from '../assets/images/logo.png';
import data from '../assets/data/navigation.json';

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);
  const [links, setLinks] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const changeWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, [width]);

  useEffect(() => {
    setLinks(data.links);
  }, []);

  useEffect(() => {
    // document.body.style.overflow = menuIsOpen ? 'hidden' : 'visible';

    if (menuIsOpen) {
      window.scrollTo(0, 0);
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [menuIsOpen]);

  return width > 786 ? (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo-link'>
          <img
            className='header__logo'
            src={Logo}
            alt='Garden jobs Logo, hoveniersbedrijf gespecialiseerd in het onderhoud en de aanleg van tuinen'
          />
        </Link>

        <nav className='header__nav'>
          <ul className='header__list'>
            <Link to='/' className='header__link'>
              <li className='header__item'>Home</li>
            </Link>
            <Link to='/over-ons' className='header__link'>
              <li className='header__item'>Over ons</li>
            </Link>
            <Link to='/tuinaanleg' className='header__link'>
              <li className='header__item'>Tuinaanleg</li>
            </Link>
            <Link to='/onderhoud' className='header__link'>
              <li className='header__item'>Onderhoud</li>
            </Link>
            <Link to='/contact' className='header__link'>
              <li className='header__item'>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  ) : (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo-link'>
          <img className='header__logo' src={Logo} alt='Garden jobs Logo' />
        </Link>

        <button
          className={
            menuIsOpen
              ? 'header__button header__button--secondary'
              : 'header__button'
          }
          onClick={() => toggleMenuIsOpen((prev) => !prev)}
        >
          <div
            className={
              menuIsOpen
                ? 'header__hamburger header__hamburger-open'
                : 'header__hamburger'
            }
          >
            <div className='header__hamburger-line'></div>
            <div className='header__hamburger-line'></div>
            <div className='header__hamburger-line'></div>
            <div className='header__hamburger-line'></div>
          </div>
        </button>
      </div>

      {menuIsOpen && (
        <m.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'just' }}
          className='header__menu-mobile'
        >
          <div className='header__menu-mobile-container'>
            <ul className='header__menu-mobile-list'>
              {links.map(({ text, href }, index) => (
                <Link to={href} key={index}>
                  <m.li
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => toggleMenuIsOpen((prev) => !prev)}
                    className={`header__menu-mobile-item ${
                      pathname === href
                        ? 'header__menu-mobile-item--active'
                        : ''
                    } `}
                  >
                    <span>{text}</span>
                  </m.li>
                </Link>
              ))}
            </ul>
          </div>

          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='container header__menu-mobile-socialscontainer'
          >
            <div className='header__menu-mobile-socials'>
              <Link
                className='header__menu-mobile-socials-link'
                target='_blank'
                to='https://www.facebook.com/people/Garden-jobs/100057469358602/'
              >
                <FaFacebookF className='header__menu-mobile-icon' />
                <span className='header__menu-mobile-socialtext'>Facebook</span>
              </Link>

              <span className='header__menu-mobile-divider'></span>

              <Link
                className='header__menu-mobile-socials-link'
                target='_blank'
                to='https://www.instagram.com/hoveniersbedrijf_garden.jobs/'
              >
                <FaInstagram className='header__menu-mobile-icon' />
                <span className='header__menu-mobile-socialtext'>
                  Instagram
                </span>
              </Link>
            </div>
          </m.div>
        </m.div>
      )}
    </header>
  );
}
