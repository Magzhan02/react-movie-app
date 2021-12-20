import React from 'react';
import axios from 'axios';

import styles from './ModalWindow.module.scss';
import { Button } from '@material-ui/core';
import YouTube from '@mui/icons-material/YouTube';

const images = `http://image.tmdb.org/t/p/w1280/`;

const apiKey = '2d2bfeef1e819ffe74edc1a51ff6c924';

function ModalWindow({
  title,
  name,
  id,
  overview,
  release_date,
  first_air_date,
  vote_average,
  poster_path,
  backdrop_path,
  setModalVisible,
  media_type,
}) {
  const [video, setVideo] = React.useState();
  const modalRef = React.useRef();

  const fetchVideo = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${apiKey}&language=en-US`);
    setVideo(data.results[0]?.key);
  };

  React.useEffect(() => {
    fetchVideo();

    document.onclick = function (e) {
      if (!e.path.includes(modalRef.current)) {
        setModalVisible(false);
      }
    };
  }, []);

  return (
    <div className={styles.over}>
      <div className={styles.wrapper}>
        <div className={styles.content} ref={modalRef}>
          <img src={images + backdrop_path || poster_path} alt={title || name} />
          <div className={styles.info}>
            <h2>{title || name}</h2>
            <div className={styles.overview}>
              <h3>Overview:</h3>
              <p>{overview}</p>
            </div>
            <div className={styles.trailer}>
              <Button
                variant="contained"
                startIcon={<YouTube />}
                style={{
                  color: 'white',
                  backgroundColor: 'red',
                  width: '230px',
                  height: '60px',
                }}
                href={`https://www.youtube.com/watch?v=${video}`}>
                Watch the Trailer
              </Button>
            </div>
            <span>
              <b> Release data: {release_date || first_air_date || '...'}</b>
              <b>Vote average: {vote_average || '...'}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
