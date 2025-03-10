import { Image } from '../App.types';

export interface GalleryProps {
  items: Image[];
  onClick: (item: Image) => void;
}
