import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'

function Header() {

  const [active , setActive] = React.useState('Trending')

  return (
    <header>
      <div className={styles.logo}>
        <img width={80} height={80} src="/img/movie.png" alt="logo" />
        <h1>Movies Hub</h1>
      </div>
      <nav>
        <ul onClick = {(e) => setActive(e.target.textContent)}>
          <Link to="/">
            <li className={active === 'Trending'? styles.active : ''} >Trending</li>
          </Link>
          <Link to="/movies">
            <li className={active === 'Movies'? styles.active : ''}>Movies</li>
          </Link>
          <Link to="/tvSeries">
            <li className={active === 'TV Series'? styles.active : ''}>TV Series</li>
          </Link>
          <Link to="/search">
            <li className={active === 'Search'? styles.active : ''}>Search</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
