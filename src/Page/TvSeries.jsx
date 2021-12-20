import React from 'react';
import axios from 'axios';

import Genres from '../components/Genres/Genres';
import useGenres from '../hooks/useGenres';
import Card from '../components/Card/Card';
import CustomPagination from '../components/Pagination/Pagination';
import SortPopup from '../components/SortPopup/SortPopup';

const apiKey = '2d2bfeef1e819ffe74edc1a51ff6c924';

function TvSeries() {
  const [page, setPage] = React.useState(1);
  const [numOfPage, setNumOfPage] = React.useState(0);
  const [content, setContent] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState([]);
  const [sort, setSort] = React.useState('popular');

  const selectedGenreId = useGenres(selectedGenre);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${sort}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedGenreId}`,
    );
    setContent(data.results);
    setNumOfPage(data.total_pages);
  };

  React.useEffect(() => {
    fetchData();
  }, [page, selectedGenreId, sort]);

  return (
    <>
      <Genres
        type="tv"
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <SortPopup
        items={[
          { name: 'Popular', type: 'popular' },
          { name: 'Top Rated', type: 'top_rated' },
          { name: 'Airing today', type: 'airing_today' },
          { name: 'On the air', type: 'on_the_air' },
        ]}
        setSort={setSort}
      />
      <div className="container">
        {content.length > 0 && content.map((obj) => <Card key={obj.id} {...obj} media_type="tv" />)}
      </div>
      {numOfPage > 1 && <CustomPagination setPage={setPage} page={page} numOfPage={numOfPage} />}
    </>
  );
}

export default TvSeries;
