import cardStyle from './Card.module.css';
import imgPost from '../../assets/img/giappone.jpg';

const CardPostDue = () => {
  return (
    <div className={cardStyle.container}>
      <div>
        <figure>
          <img className={cardStyle.image} src={imgPost} alt="image-post" />
        </figure>
        <h2 className={cardStyle.titolo}>La bellezza dei parchi giapponesi</h2>
        <p className={cardStyle.contenuto}>
          I parchi giapponesi sono veri gioielli di serenità e bellezza. Durante
          il mio viaggio in Giappone, ho visitato parchi con giardini zen,
          laghetti tranquilli e ponticelli pittoreschi. Ogni stagione offre uno
          spettacolo unico, dai ciliegi in primavera agli aceri in autunno.
          Passeggiare tra questi paesaggi è stata un'esperienza rilassante.
          Osservare le carpe koi nei laghetti e ascoltare il suono dell'acqua
          nei ruscelli ha portato una profonda tranquillità. I parchi giapponesi
          sono luoghi di meditazione e contemplazione, perfetti per sfuggire al
          caos quotidiano. Se visitate il Giappone, esplorate questi parchi
          incantevoli. Offrono momenti di serenità e bellezza indimenticabili.
        </p>
      </div>
      <div>
        <button className={cardStyle.btn}>Leggi di più</button>
      </div>
    </div>
  );
};

export default CardPostDue;
