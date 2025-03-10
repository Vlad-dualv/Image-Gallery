import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { ModalProps } from './ImageModal.types';
ReactModal.setAppElement('#root');

export default function ImageModal({ image, isOpen, onClose }: ModalProps) {
  return (
    <div>
      <ReactModal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.img}
        />
      </ReactModal>
    </div>
  );
}
