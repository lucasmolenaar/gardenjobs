import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Image from '../assets/images/maintenance.jpeg';
import QuotationBanner from '../components/QuotationBanner';
import { BsArrowRightShort } from 'react-icons/bs';

const MaintenancePage = () => {
  return (
    <>
      <Helmet>
        <title>Garden jobs | Onderhoud</title>
      </Helmet>

      <Header title='Onderhoud' />

      <div className='maintenance'>
        <section className='container maintenance__container'>
          <div className='maintenance__content'>
            <h2 className='maintenance__title'>
              &ldquo; De tuin is een plek waarin geleefd wordt, waarin u kunt
              genieten, ontspannen en waar kinderen in spelen. &rdquo;
            </h2>

            <p className='maintenance__text'>
              Als u uw tuin jarenlang mooi wilt laten zijn, is het verstandig om
              regelmatig uw tuin te onderhouden. Het zorgt er bijvoorbeeld voor
              dat planten en onkruid niet gaan woekeren, het gras gezond blijft,
              heggen mooi strak blijven en dat de planten en struiken tot zijn
              recht komen.
              <br /> <br />
              Garden jobs doet bij verschillende tuinen de onderhoud
              werkzaamheden.
              <br /> <br />
              De onderhoud werkzaamheden waar Garden jobs zich mee bezig houdt,
              lopen uiteen van particuliere tuinen tot grote tuinen op
              bedrijventerreinen.
            </p>

            <h3 className='maintenance__subtitle'>
              Voorbeelden van tuinaanleg zijn:
            </h3>

            <ul className='maintenance__examples'>
              <li className='maintenance__example'>
                <BsArrowRightShort />
                Snoei werkzaamheden
              </li>
              <li className='maintenance__example'>
                <BsArrowRightShort />
                Grasmaaien
              </li>
              <li className='maintenance__example'>
                <BsArrowRightShort />
                Schoffelen
              </li>
              <li className='maintenance__example'>
                <BsArrowRightShort />
                Bemesting van beplanting
              </li>
              <li className='maintenance__example'>
                <BsArrowRightShort />
                Onkruid verwijderen
              </li>
              <li className='maintenance__example'>
                <BsArrowRightShort />
                Tuinen voorbereiden op het voorjaar, de zomer en het najaar
              </li>
            </ul>
          </div>

          <div className='maintenance__image'>
            <img
              src={Image}
              alt='Garden jobs, onderhoud, hoveniersbedrijf gespecialiseerd in het onderhoud en de aanleg van tuinen'
            />
          </div>
        </section>

        <QuotationBanner bgColor={'#193924'} />
      </div>
    </>
  );
};

export default MaintenancePage;
