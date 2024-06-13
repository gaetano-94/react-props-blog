import cardStyle from './Card.module.css';
import imgPost from '../../assets/img/newyork.jpg';

const CardPostTre = () => {
  return (
    <div className={cardStyle.container}>
      <div>
        <figure>
          <img className={cardStyle.image} src={imgPost} alt="image-post" />
        </figure>
        <h2 className={cardStyle.titolo}> L'energia di New York City</h2>
        <p className={cardStyle.contenuto}>
          New York è una città vibrante e piena di vita, conosciuta come la
          città che non dorme mai. Sono rimasto affascinato dall'energia delle
          sue strade affollate, dalla frenesia di Times Square alla tranquillità
          di Central Park. Passeggiando lungo la Quinta Strada, ho ammirato
          grattacieli iconici come l'Empire State Building. Ogni quartiere ha la
          sua personalità: Soho con le sue gallerie d'arte, Brooklyn con il suo
          fascino bohemien. La scena culinaria è incredibile, dai bagel ai
          piatti etnici nei ristoranti di Chinatown e Little Italy. I musei,
          come il Metropolitan Museum of Art e il MoMA, ospitano collezioni
          d'arte straordinarie. New York incanta e ispira con la sua cultura,
          architettura e vitalità urbana. Se avete l'opportunità di visitarla,
          preparatevi a essere travolti dalla sua energia.
        </p>
      </div>
      <div>
        <button className={cardStyle.btn}>Leggi di più</button>
      </div>
    </div>
  );
};

export default CardPostTre;
