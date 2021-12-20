import React from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';
import CustomPagination from '../components/Pagination/Pagination';

const apiKey = '2d2bfeef1e819ffe74edc1a51ff6c924';

function Popular() {
  const [page, setPage] = React.useState(1);
  const [numOfPage, setNumOfPage] = React.useState(0);
  const [content, setContent] = React.useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`,
    );
    setContent(data.results);
    setNumOfPage(data.total_pages);
  };
  React.useEffect(() => {
    fetchData();
  }, [ ,page]);

  return (
    <>
      <div className="container">
        {content.length > 0 && content.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
      {numOfPage > 1 && (
        <CustomPagination
          setPage={setPage}
          page={page}
          numOfPage={numOfPage}
        />
      )}
    </>
  );
}

export default Popular;
