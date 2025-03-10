import { MouseEvent } from 'react';

export interface MoreBtnProp {
  loadMore: (event: MouseEvent<HTMLButtonElement>) => void;
}
