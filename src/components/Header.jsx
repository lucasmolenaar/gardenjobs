import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, [width]);

  return width > 786 ? (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={Logo} alt='Garden Jobs Logo' />

        <nav className='header__nav'>
          <ul className='header__list'>
            <Link to='/' className='header__link'>
              <li className='header__item'>Home</li>
            </Link>
            <Link to='/over-ons' className='header__link'>
              <li className='header__item'>Over ons</li>
            </Link>
            <Link to='/diensten' className='header__link'>
              <li className='header__item'>Diensten</li>
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
        <img className='header__logo' src={Logo} alt='Garden Jobs Logo' />

        <HiMenuAlt3 className='header__hamburger' />
      </div>
    </header>
  );
}
