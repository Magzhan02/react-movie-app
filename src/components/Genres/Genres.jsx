import React from 'react';
import axios from 'axios';
import { Chip } from '@material-ui/core';

import styles from './Genres.module.scss'

const apiKey = '2d2bfeef1e819ffe74edc1a51ff6c924';

function Genres({ type, selectedGenre, setSelectedGenre, genres, setGenres }) {
  const handleAdd = (genre) => {
    setSelectedGenre([...selectedGenre, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
  };
  const handleRemove = (genre) => {
    setSelectedGenre(selectedGenre.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`,
    );
    setGenres(data.genres);
  };
  React.useEffect(() => {
    fetchGenres();

    return function () {
      setGenres([]);
    };
  }, []);

  return (
    <div className={styles.genres}>
      <div style={{ padding: '6px' }}>
        {selectedGenre &&
          selectedGenre.map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              color="primary"
              clickable
              onDelete={() => handleRemove(genre)}
              style={{ margin: 2 }}
            />
          ))}
        {genres &&
          genres.map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              style={{ margin: 2 }}
              clickable
              onClick={() => handleAdd(genre)}
            />
          ))}
      </div>
    </div>
  );
}

export default Genres;
