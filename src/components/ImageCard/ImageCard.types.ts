import { Image } from '../App.types';

export interface Data {
  data: Image;
  onClick: (url: string) => void;
}
