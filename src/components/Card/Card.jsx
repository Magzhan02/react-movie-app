import React from 'react';

import ModalWindow from '../ModalWindow/ModalWindow';

import styles from './Card.module.scss'

const images = `http://image.tmdb.org/t/p/w1280/`;

function Card(content) {
  const {
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    backdrop_path,
    poster_path,
    media_type,
  } = content;

  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleVisble = () => {
    setModalVisible(true);
  };

  return (
    <main className={styles.card} onClick={toggleVisble}>
      <div className={styles.vote}>{vote_average}</div>
      <div className="content">
        <img src={images + poster_path || backdrop_path} alt="poster" />
        <div className={styles.info}>
          <b>{title || name}</b>
          <div className={styles.media}>
            <span>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
            <span>{release_date || first_air_date}</span>
          </div>
        </div>
      </div>
      {modalVisible && <ModalWindow {...content} setModalVisible={setModalVisible} />}
    </main>
  );
}

export default Card;
