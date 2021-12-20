import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#f3f3f3"
      }
    }
  }));

function CustomPagination({ setPage, numOfPage}) {
  const classes = useStyles();

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        margin: 50,
      }}>
      <Pagination
        classes={{ ul: classes.ul }}
        count={numOfPage}
        color="primary"
        onChange={(e) => handleChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        variant="outlined"
      />
    </div>
  );
}

export default CustomPagination;
