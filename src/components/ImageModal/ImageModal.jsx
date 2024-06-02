import Modal from 'react-modal';
// import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, modalIsClose, image }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalIsClose}
      contentLabel="Image Modal"
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        orientation={image.landscape}
      />
      <ul>
        <li>Title: {image.alt_description}</li>
        <li>Likes: {image.likes}</li>
      </ul>
    </Modal>
  );
};

export default ImageModal;
