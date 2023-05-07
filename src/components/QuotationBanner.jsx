import { Link } from 'react-router-dom';

export default function QuotationBanner({ bgColor }) {
  return (
    <div className='banner' style={{ backgroundColor: bgColor }}>
      <div className='container'>
        <h1 className='banner__title'>
          Neem contact op voor een vrijblijvende offerte
        </h1>

        <Link to='/contact'>
          <button className='banner__cta'>Aanvragen</button>
        </Link>
      </div>
    </div>
  );
}
