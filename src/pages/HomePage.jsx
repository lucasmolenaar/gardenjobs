import HeaderHome from '../components/HeaderHome';
import Banner from '../components/QuotationBanner';
import Button from '../components/Button';
import About from '../assets/images/job_in_water.jpeg';
import Garden from '../assets/images/home-garden.jpg';

export default function HomePage() {
  return (
    <>
      <HeaderHome />

      <div className='home'>
        <section className='container home__intro'>
          <h2 className='home__title'>Onderhoud en tuinaanleg</h2>

          <p className='home__intro-text'>
            Garden Jobs is een hoveniersbedrijf voor onderhoud en aanleg van
            tuinen in de omgeving Haarlem en de wijde omtrek. De werkzaamheden
            lopen uit een van het aanleggen van complete tuinen, het plaatsen
            van schuttingen, vijvers, pergola’s en vlonders. Kortom, voor alles
            wat te maken heeft met tuinen kunt u terecht bij Garden Jobs.
            <br />
            <br />
            Neem gerust een kijkje op deze site om een indruk te krijgen van
            waar Garden Jobs zoal mee bezig is.
          </p>
        </section>

        <section className='home__about'>
          <div className='container home__container'>
            <div className='home__about-content'>
              <h2 className='home__about-title'>Over Garden Jobs</h2>

              <p className='home__about-text'>
                Ik, Job Plooij, ben al vanaf mijn 12<sup>de</sup> jaar aan het
                werk in tuinen. Het liefst was ik na schooltijd in de tuin van
                familie en vrienden te vinden. Ik begon met
                onderhoudswerkzaamheden en heb dit later verder uit kunnen
                breiden tot het aanleggen van tuinen. Ik deed dit vaak met
                vrienden. Het was, en is nog steeds, een hobby van mij.
              </p>

              <Button path='/over-ons' text='Lees meer' />
            </div>

            <div className='home__about-image'>
              <img src={About} alt='' />
            </div>
          </div>
        </section>

        <Banner bgColor='#9fc93e' />

        <section className='container home__services'>
          <div className='home__services-content'>
            <h2 className='home__services-title'>Diensten</h2>

            <h4 className='home__services-subtitle'>Onderhoud</h4>

            <p className='home__services-text'>
              De tuin is een plek waarin geleefd wordt, waarin u kunt genieten,
              ontspannen en waar kinderen in spelen. Als u uw tuin jarenlang
              mooi wilt laten zijn, is het verstandig om regelmatig uw tuin te
              onderhouden. Het zorgt er bijvoorbeeld voor dat planten en onkruid
              niet gaan woekeren, het gras gezond blijft, heggen mooi strak
              blijven en dat de planten en struiken tot zijn recht komen.{' '}
            </p>

            <Button path='/diensten' text='Kom meer te weten' />

            <h4 className='home__services-subtitle'>Tuinaanleg</h4>

            <p className='home__services-text'>
              Een tuin is zo veel meer dan alleen een stukje groen. Een tuin is
              een verleng stuk van uw huis. Kleur, leven, comfort en sfeer
              kunnen samen komen in een tuin die geheel naar uw wens gemaakt kan
              worden. Garden jobs geeft u passende adviezen en voorbeelden die
              bij uw tuin passen.
            </p>

            <Button path='/diensten' text='Kom meer te weten' />
          </div>

          <div className='home__services-image'>
            <img src={Garden} alt='' />
          </div>
        </section>
      </div>
    </>
  );
}
