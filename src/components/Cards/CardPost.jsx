// IMPORT
import cardStyle from './Card.module.css';
import imgPost from '../../assets/img/foresta.jpg';

const CardPost = () => {
  return (
    <div className={cardStyle.container}>
      <figure>
        <img className={cardStyle.image} src={imgPost} alt="image-post" />
      </figure>
      <h2 className={cardStyle.titolo}>
        L'incredibile viaggio nella foresta amazzonica
      </h2>
      <p className={cardStyle.contenuto}>
        La foresta amazzonica è un luogo affascinante, pieno di biodiversità e
        meraviglie naturali. Durante il mio viaggio, ho esplorato sentieri
        nascosti, attraversato fiumi e immerso nella rigogliosa vegetazione
        tropicale. Ho incontrato tribù indigene, imparando antiche tradizioni e
        metodi di sopravvivenza. Ogni giorno era un'avventura: svegliarsi al
        canto degli uccelli, avvistare scimmie tra gli alberi e osservare piante
        rare. Le notti erano altrettanto affascinanti, con il cielo stellato che
        illuminava il nostro accampamento e i suoni della natura che ci
        cullavano nel sonno. La foresta amazzonica offre una profonda
        connessione con la terra e con se stessi. È un'esperienza che cambia la
        vita, portando un nuovo apprezzamento per la bellezza e la fragilità del
        nostro pianeta. Se avete l'opportunità di visitare questo luogo magico,
        non esitate: sarà un viaggio indimenticabile.
      </p>
      <div>
        <button className={cardStyle.btn}>Leggi di più</button>
      </div>
    </div>
  );
};

export default CardPost;
