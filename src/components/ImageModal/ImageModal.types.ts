import { Image } from '../App.types';

export interface ModalProps {
  image: Image;
  isOpen: boolean;
  onClose: () => void;
}
