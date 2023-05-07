import { Link } from 'react-router-dom';
import Header from './Header';

export default function HeaderHome() {
  return (
    <div className='homeheader'>
      <Header />

      <h1 className='homeheader__title'>
        Hoverniersbedrijf <br /> Garden Jobs
      </h1>

      <div className='homeheader__buttons'>
        <Link to='/contact'>
          <button className='homeheader__button'>Contact</button>
        </Link>

        <Link to='/diensten'>
          <button className='homeheader__button'>Diensten</button>
        </Link>
      </div>
    </div>
  );
}
