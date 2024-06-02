// import css from './ImageCard.module.css';

function ImageCard({ image, onImageModal }) {
  return (
    <div onClick={() => onImageModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        orientation={image.landscape}
        width={400}
        height={250}
      />
      <ul>
        <li>Title: {image.alt_description}</li>
        <li>Likes: {image.likes}</li>
      </ul>
    </div>
  );
}

export default ImageCard;
