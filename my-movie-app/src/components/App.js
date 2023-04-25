import '../App.css';
import 'bulma/css/bulma.min.css'
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Watched from "./Movie/Watched";
import SingleMovie from "./Movie/SingleMovie";
import ForViewing from "./Movie/ForViewing";
import Layout from "./Layout";
import {Provider} from "react-redux";
import store from "../redux/store";
import MovieContainer from "../container/Movie";

const App = () => {
  return (
      <>
          <Provider store={store}>
              <BrowserRouter>
                  <Layout>
                      <Routes>
                          <Route exact path="/" element={<MovieContainer/>} />
                          <Route path="/movie" element={<MovieContainer />} />
                          <Route path="/movie/:id" element={<SingleMovie/>} />
                          <Route path="/watched" element={<Watched />} />
                          <Route path="/viewing" element={<ForViewing />} />
                      </Routes>
                  </Layout>
              </BrowserRouter>
          </Provider>
      </>
  );
};

export default App;
