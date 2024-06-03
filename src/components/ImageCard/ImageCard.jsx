import css from './ImageCard.module.css';

function ImageCard({ image, onImageModal }) {
  return (
    <div className={css.item} onClick={() => onImageModal(image)}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        orientation={image.landscape}
        width={370}
        height={270}
      />
      <ul className={css.wrapper}>
        <li className={css.info}>
          Photographer: <span className={css.span}>{image.user.name}</span>{' '}
        </li>
        <li className={css.info}>
          Likes: <span className={css.span}>{image.likes}</span>{' '}
        </li>
      </ul>
    </div>
  );
}

export default ImageCard;
