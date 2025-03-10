import css from './LoadMoreBtn.module.css';
import { MoreBtnProp } from './LoadMoreBtn.types';

export default function LoadMoreBtn({ loadMore }: MoreBtnProp) {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
}
