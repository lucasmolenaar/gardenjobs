import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { BsHouseDoor, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [nameInput, setNameInput] = useState('');
  const [nameIsNotEmpty, setNameIsNotEmpty] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [emailIsNotEmpty, setEmailIsNotEmpty] = useState(false);

  useEffect(() => {
    setNameIsNotEmpty(nameInput.length > 0);
  }, [nameInput]);

  useEffect(() => {
    setEmailIsNotEmpty(emailInput.length > 0);
  }, [emailInput]);

  return (
    <>
      <Header title='Contact' />

      <div className='container contact'>
        <section className='container contact__container'>
          <div className='contact__left'>
            <h2 className='contact__title'>Bent u toe aan iets nieuws?</h2>

            <p className='contact__intro-text'>
              Vindt u dat uw tuin een opknap beurt nodig heeft? Of heeft u
              bijvoorbeeld weinig tijd om uw tuin zelf te onderhouden? Maak een
              afspraak met Garden jobs!
            </p>

            <form className='contact__form'>
              <div className='contact__input-group'>
                <input
                  className='contact__input'
                  type='text'
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <label
                  className={`contact__label ${
                    nameIsNotEmpty && 'contact__label-not-empty'
                  }`}
                >
                  Naam *
                </label>
              </div>

              <div className='contact__input-group'>
                <input
                  className='contact__input'
                  type='text'
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <label
                  className={`contact__label ${
                    emailIsNotEmpty && 'contact__label-not-empty'
                  }`}
                >
                  Email *
                </label>
              </div>

              <textarea
                rows={10}
                placeholder='Uw bericht'
                className='contact__textarea'
              ></textarea>

              <button className='contact__submit' type='submit'>
                Verstuur
              </button>
            </form>
          </div>

          <div className='contact__right'>
            <h2 className='contact__title'>Bedrijfsgegevens</h2>

            <ul className='contact__details'>
              <li>
                <BsHouseDoor size={30} color='#9fc93e' />
                <p>
                  Kanteel 64 <br /> 1648 JD De Goorn
                </p>
              </li>

              <li>
                <FiMail size={30} color='#9fc93e' />
                <p>
                  <a href='mailto:hoveniersbedrijfgardenjobs@hotmail.com'>
                    hoveniersbedrijfgardenjobs@hotmail.com
                  </a>
                </p>
              </li>

              <li>
                <FaMobileAlt size={30} color='#9fc93e' />
                <p>
                  <a href='tel:0642472268'>06 - 42 47 22 68</a>
                </p>
              </li>

              <li>
                <BsWhatsapp size={30} color='#9fc93e' />
                <p>
                  <a href='https://api.whatsapp.com/send?phone=0642472268'>
                    06 - 42 47 22 68
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
