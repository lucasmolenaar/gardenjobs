import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function HeaderHome() {
  return (
    <div className='homeheader'>
      <NavBar />

      <h1 className='homeheader__title'>
        Hoverniersbedrijf <br /> Garden jobs
      </h1>

      <div className='homeheader__buttons'>
        <Link to='/contact'>
          <button className='homeheader__button'>Contact</button>
        </Link>
      </div>
    </div>
  );
}
