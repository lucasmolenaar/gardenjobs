import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsHouseDoor, BsChevronRight } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__socials'>
          <h2 className='footer__socials-title'>Volg ons</h2>

          <ul className='footer__socials-list'>
            <li className='footer__socials-item'>
              <FaFacebookF className='footer__socials-icon' size={30} />
            </li>
            <li className='footer__socials-item'>
              <FaInstagram className='footer__socials-icon' size={30} />
            </li>
          </ul>
        </div>

        <div className='footer__pages'>
          <h2 className='footer__pages-title'>Snel zoeken</h2>

          <ul className='footer__pages-list'>
            <li className='footer__pages-item'>
              <BsChevronRight className='footer__pages-icon' />
              <a href='/'>Home</a>
            </li>
            <li className='footer__pages-item'>
              <BsChevronRight className='footer__pages-icon' />
              <a href='/over-ons'>Over ons</a>
            </li>
            <li className='footer__pages-item'>
              <BsChevronRight className='footer__pages-icon' />
              <a href='/tuinaanleg'>Tuinaanleg</a>
            </li>
            <li className='footer__pages-item'>
              <BsChevronRight className='footer__pages-icon' />
              <a href='/onderhoud'>Onderhoud</a>
            </li>
            <li className='footer__pages-item'>
              <BsChevronRight className='footer__pages-icon' />
              <a href='/contact'>Contact</a>
            </li>
            <li className='footer__pages-item'>
              <BsChevronRight className='footer__pages-icon' />
              <a href='contact'>Offerte aanvragen</a>
            </li>
          </ul>
        </div>

        <div className='footer__details'>
          <h2 className='footer__details-title'>Bedrijfsgegevens</h2>
          <ul className='footer__details-list'>
            <li className='footer__details-item'>
              <BsHouseDoor size={30} />
              <p>
                Kanteel 64 <br /> 1648 JD De Goorn
              </p>
            </li>
            <li className='footer__details-item'>
              <FaMobileAlt size={30} />
              <p>
                <a href='tel:0642472268'>06 - 42 47 22 68</a>
              </p>
            </li>
            <li className='footer__details-item'>
              <FiMail size={30} />
              <p>
                <a href='mailto:hoveniersbedrijfgardenjobs@hotmail.com'>
                  hoveniersbedrijfgardenjobs@hotmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className='footer__contact'>
          <h2 className='footer__contact-title'>Contact</h2>
          <p>Bent u toe aan iets nieuws?</p>

          <Link to='/contact'>
            <button className='footer__contact-btn'>Neem nu contact op</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
