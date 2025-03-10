import css from './ImageCard.module.css';
import { Data } from './ImageCard.types';

export default function ImageCard({
  data: { urls, likes, user, alt_description },
  onClick,
}: Data) {
  return (
    <>
      <div onClick={() => onClick(urls.regular)}>
        <img src={urls.small} alt={alt_description} className={css.img} />
      </div>
      <div className={css.description}>
        <p>Likes: {likes}</p>
        <p>Published by: {user.name}</p>
      </div>
    </>
  );
}
