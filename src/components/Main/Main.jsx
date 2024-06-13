// IMPORT
import CardPost from '../Cards/CardPost';
import mainStyle from './Main.module.css';
import Tags from '../Tags/Tags';

// import image
import forestaImage from '../../assets/img/foresta.jpg';
import giapponeImage from '../../assets/img/giappone.jpg';
import newyorkImage from '../../assets/img/newyork.jpg';
import spiaggiaImage from '../../assets/img/spiaggia.jpg';

// array dei posts
const posts = [
  {
    id: 1,
    title: 'Viaggio nella foresta amazzonica',
    image: forestaImage,
    content:
      "La foresta amazzonica è un luogo affascinante, pieno di biodiversita e meraviglie naturali. Durante il mio viaggio, ho avuto l'opportunita di esplorare sentieri nascosti, attraversare fiumi impetuosi e immergermi nella rigogliosa vegetazione tropicale. Ho incontrato tribu indigene che vivono in perfetta armonia con la natura, imparando da loro antiche tradizioni e metodi di sopravvivenza.",
    tags: ['html', 'css'],
    published: true,
  },
  {
    id: 2,
    title: 'La bellezza dei parchi giapponesi',
    image: '',
    content:
      'I parchi giapponesi sono veri gioielli di serenita e bellezza. Durante il mio viaggio in Giappone, ho visitato parchi con giardini zen, laghetti tranquilli e ponticelli pittoreschi. Ogni stagione offre uno spettacolo unico, dai ciliegi in primavera agli aceri in autunno.',
    tags: ['js', 'css'],
    published: true,
  },
  {
    id: 3,
    title: 'New York City',
    image: newyorkImage,
    content:
      "New York è una citta vibrante e piena di vita, conosciuta come la citta che non dorme mai. Sono rimasto affascinato dall'energia delle sue strade affollate, dalla frenesia di Times Square alla tranquillita di Central Park.",
    tags: ['js', 'php'],
    published: true,
  },
  {
    id: 4,
    title: 'La tranquillità delle spiagge caraibiche',
    image: spiaggiaImage,
    content:
      "Le spiagge dei Caraibi sono paradisiache, con acque cristalline e sabbia bianca che offrono un relax totale. Durante il mio soggiorno, ho goduto di giornate soleggiate e paesaggi mozzafiato. Le palme ondeggianti e il suono delle onde creano un'atmosfera di pace e serenita.",
    tags: ['html'],
    published: false,
  },
];

const newTags = [...new Set(posts.flatMap((post) => post.tags))];

export default () => {
  return (
    <main>
      <Tags tags={newTags} />
      <section className={mainStyle.main}>
        {posts.map((p, index) => (
          <CardPost
            key={`postCard${index}`}
            id={p.id}
            title={p.title}
            image={p.image}
            content={p.content}
            tags={p.tags}
            published={p.published}
          />
        ))}
      </section>
    </main>
  );
};
