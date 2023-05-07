import { Link } from 'react-router-dom';

export default function Button({ path, text }) {
  return (
    <Link to={path}>
      <button className='button'>{text}</button>
    </Link>
  );
}
