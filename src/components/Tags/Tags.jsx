import tagsStyle from './Tags.module.css';

const Tags = ({ tags }) => {
  return (
    <div className={tagsStyle.containerTags}>
      <h4>Tag utilizzari: </h4>
      {tags.map((tag, index) => (
        <span key={index} className={`color-${tag}`}>
          #{tag}{' '}
        </span>
      ))}
    </div>
  );
};

export default Tags;
