import ImageCard from '../ImageCard/ImageCard';
// import css from './ImageGallery.module.css';

function ImageGallery({ images, onImageModal }) {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onImageModal={onImageModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
