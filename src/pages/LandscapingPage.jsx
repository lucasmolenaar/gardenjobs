import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Image from '../assets/images/landscaping.jpeg';
import QuotationBanner from '../components/QuotationBanner';
import { BsArrowRightShort } from 'react-icons/bs';

const LandscapingPage = () => {
  return (
    <>
      <Helmet>
        <title>Garden jobs | Tuinaanleg</title>
      </Helmet>

      <Header title='Tuinaanleg' />

      <div className='landscaping'>
        <section className='container landscaping__container'>
          <div className='landscaping__image'>
            <img
              src={Image}
              alt='Garden jobs, tuinaanleg, hoveniersbedrijf gespecialiseerd in het onderhoud en de aanleg van tuinen'
            />
          </div>

          <div className='landscaping__content'>
            <h2 className='landscaping__title'>
              &ldquo; Een tuin is zo veel meer dan alleen een stukje groen. Een
              tuin is een verleng stuk van uw huis. &rdquo;
            </h2>

            <p className='landscaping__text'>
              Kleur, leven, comfort en sfeer kunnen samen komen in een tuin die
              geheel naar uw wens gemaakt kan worden. Garden jobs geeft u
              passende adviezen en voorbeelden die bij uw tuin passen.
              <br /> <br />
              Om een mooie tuin te ontwerpen, maakt Garden jobs gebruik van een
              3D tuinontwerp programma. Hierdoor heeft u een goed beeld van wat
              het eindresultaat kan gaan worden.
            </p>

            <h3 className='landscaping__subtitle'>
              Voorbeelden van tuinaanleg zijn:
            </h3>

            <ul className='landscaping__examples'>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Bestrating
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Vijvers
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Schuttingen
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Pergola's
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Schuurtjes
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Veranda's
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Beplanting
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Graszoden
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Kunstgras
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Vlonders
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Beschoeiing
              </li>
              <li className='landscaping__example'>
                <BsArrowRightShort />
                Planten bakken
              </li>
            </ul>
          </div>
        </section>

        <section className='container landscaping__material-section'>
          <h3 className='landscaping__subtitle'>Materiaal</h3>
          <p>
            Garden jobs maakt gebruik van verschillende machines en gereedschap.
            Er wordt gewerkt met onder andere een kraan, een dumper, een
            grasmaaier, een trekker en allerlei andere machines die nodig zijn
            om een goed hoveniersbedrijf draaiende te houden. Garden jobs vindt
            het belangrijk dat het materiaal goede van kwaliteit is. Er wordt
            gebruik gemaakt van gereedschap en machines van onder anderen de
            merken STIHL en Hitachi/Hikoki.
          </p>
        </section>

        <QuotationBanner bgColor={'#193924'} />
      </div>
    </>
  );
};

export default LandscapingPage;
