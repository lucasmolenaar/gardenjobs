import NavBar from './NavBar';

export default function Header({ title }) {
  return (
    <div className='aboutheader'>
      <NavBar />

      <h1 className='aboutheader__title'>{title}</h1>
    </div>
  );
}
