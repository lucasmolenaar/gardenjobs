import HeaderAbout from '../components/Header';
// import Image from '../assets/images/Gardenjobs-over-mij.jpeg';
import AboutImage from '../assets/images/job_in_water.jpeg';
import QuotationBanner from '../components/QuotationBanner';

const AboutPage = () => {
  return (
    <>
      <HeaderAbout title='Over ons' />

      <div className='about'>
        <section className='container about__container'>
          <div className='about__content'>
            <h2 className='about__title'>Job Plooij</h2>

            <p className='about__text'>
              Ik (Job Plooij) ben al vanaf mijn 12de jaar aan het werk in
              tuinen. Het liefst was ik na schooltijd in de tuin van familie en
              vrienden te vinden. Ik begon met onderhoudswerkzaamheden en heb
              dit later verder uit kunnen breiden tot het aanleggen van tuinen.
              Ik deed dit vaak met vrienden. Het was, en is nog steeds, een
              hobby van mij.
              <br />
              <br />
              Ik besloot hierin verder te gaan en heb tussentijds de opleiding
              tuin-park en landschap gevolgd op het Clusius college in Alkmaar.
              In 2014 heb ik mijn diploma behaald en hierna ben ik aan de slag
              gegaan als hovenier. Na mijn opleiding heb ik eerst vijf jaar
              werkervaring op gedaan bij verschillende werkgevers. Ik heb
              hierbij de ervaring opgedaan die ik nodig heb om een eigen
              hoveniersbedrijf te beginnen.
            </p>
          </div>

          <div className='home__about-image'>
            <img src={AboutImage} alt='' />
          </div>
        </section>

        <QuotationBanner bgColor={'#193924'} />
      </div>
    </>
  );
};

export default AboutPage;
