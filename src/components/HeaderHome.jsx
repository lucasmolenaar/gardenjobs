import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import NavBar from './NavBar';

export default function HeaderHome() {
  return (
    <div className='homeheader'>
      <NavBar />

      <m.h1
        className='homeheader__title'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Hoverniersbedrijf <br /> Garden jobs
      </m.h1>

      <m.div
        className='homeheader__buttons'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link to='/contact'>
          <button className='homeheader__button'>Contact</button>
        </Link>
      </m.div>
    </div>
  );
}
