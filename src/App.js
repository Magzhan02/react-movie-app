import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import { Movies, TvSeries, Popular, Search } from './Page'

function App() {
  
  return (
    <div className="wrapper">
    <Header/>
    <Route path='/' component={Popular} exact/>
    <Route path='/movies' component={Movies} exact/>
    <Route path='/tvSeries' component={TvSeries} exact/>
    <Route path='/search' component={Search} exact/>
    </div>
  );
}

export default App;
