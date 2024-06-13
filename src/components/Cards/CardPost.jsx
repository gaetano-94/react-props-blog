// IMPORT
import cardStyle from './Card.module.css';
import imgPost from '../../assets/img/foresta.jpg';

const CardPost = ({ image, title, content, tags, published }) => {
  return (
    <div className={`container ${published ? 'published' : ''}`}>
      <img
        className={cardStyle.image}
        src={` ${image || 'https://placehold.co/600x400'} `}
        alt={title}
      />
      <h2 className={cardStyle.titolo}>{title}</h2>
      <p className={cardStyle.contenuto}>{content}</p>
      <div>
        <ul className={cardStyle.tags}>
          {tags.map((tag, index) => (
            <li key={`tag${index}`} className={`color-${tag}`}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className={cardStyle.btn}>Leggi di più</button>
      </div>
    </div>
  );
};

export default CardPost;
