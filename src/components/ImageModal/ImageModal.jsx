import Modal from 'react-modal';
// import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'whitesmoke',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
};

const ImageModal = ({ modalIsOpen, modalIsClose, image }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={modalIsClose}
      contentLabel="Image Modal"
      closeOnOverlayClick={true}
      closeOnEsc={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        orientation={image.landscape}
      />
    </Modal>
  );
};

export default ImageModal;
