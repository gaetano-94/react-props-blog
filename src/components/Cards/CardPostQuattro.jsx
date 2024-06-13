import cardStyle from './Card.module.css';
import imgPost from '../../assets/img/spiaggia.jpg';

const CardPostQuattro = () => {
  return (
    <div className={cardStyle.container}>
      <div>
        <figure>
          <img className={cardStyle.image} src={imgPost} alt="image-post" />
        </figure>
        <h2 className={cardStyle.titolo}>
          La tranquillità delle spiagge caraibiche
        </h2>
        <p className={cardStyle.contenuto}>
          Le spiagge dei Caraibi sono paradisiache, con acque cristalline e
          sabbia bianca che offrono un relax totale. Durante il mio soggiorno,
          ho goduto di giornate soleggiate e paesaggi mozzafiato. Le palme
          ondeggianti e il suono delle onde creano un'atmosfera di pace e
          serenità. Ho esplorato diverse isole, ognuna con il suo fascino unico.
          Lo snorkeling nelle barriere coralline è stato un punto culminante,
          rivelando un mondo sottomarino pieno di colori e vita. Le serate erano
          altrettanto magiche, con tramonti spettacolari che tingevano il cielo
          di sfumature incredibili. Se cercate un luogo per rilassarvi e
          rigenerarvi, le spiagge caraibiche sono la destinazione ideale. Un
          angolo di paradiso dove la natura regna sovrana e il tempo sembra
          fermarsi.
        </p>
      </div>
      <div>
        <button className={cardStyle.btn}>Leggi di più</button>
      </div>
    </div>
  );
};

export default CardPostQuattro;
