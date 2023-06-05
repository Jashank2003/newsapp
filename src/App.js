import "./App.css";
// rcc
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const  App = () => {

   const apikey = process.env.REACT_APP_NEWS_API
  
  const[progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
        <Navbar /> 
        <LoadingBar
        color='#f11946'
        progress={progress}/>
          <Routes>
            <Route
              exact
              path="/general"
              element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={6} country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={6} country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={6} country="in" category="entertainment" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={6} country="in" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={6} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  
}
export default App