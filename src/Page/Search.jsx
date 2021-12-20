import React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Tabs, Tab } from '@mui/material';

import Card from '../components/Card/Card';
import CustomPagination from '../components/Pagination/Pagination';

const apiKey = '2d2bfeef1e819ffe74edc1a51ff6c924';

function Search() {
  const [type, setType] = React.useState(0);
  const [searchText, setSearchText] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [content, setContent] = React.useState([]);
  const [numOfPage, setNumOfPage] = React.useState(0);

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? 'tv' : 'movie'
      }?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
    );
    setContent(data.results);
    console.log(data.results);
    setNumOfPage(data.total_pages);
  };
  React.useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page, searchText]);

  return (
    <>
      <div className="search">
        <TextField
          className="search-box"
          label="Search.."
          variant="filled"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Tabs
          value={type}
          className="tabs"
          indicatorColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
          }}>
          <Tab style={{ width: '50%', color: '#f3f3f3' }} label="Search Movies" />
          <Tab style={{ width: '50%', color: '#f3f3f3' }} label="Search TV Series" />
        </Tabs>
      </div>
      {searchText.length > 0 && (
        <>
          <div className="container">
            {content.length > 0 &&
              content.map((obj) => (
                <Card key={obj.id} {...obj} media_type={type ? 'tv' : 'movie'} />
              ))}
          </div>

          {numOfPage > 1 && (
            <CustomPagination setPage={setPage} page={page} numOfPage={numOfPage} />
          )}
        </>
      )}
    </>
  );
}

export default Search;
