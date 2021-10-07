import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from '../constants';
import axios from "axios";
import Picture from "./Picture";
import Header from "./Header";

function App() {
  const[nasa, setNasa] = useState([]);
  // console.log(nasa)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(resp => {
        // console.log(resp)
        setNasa(resp.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <Header />
      {nasa && <Picture nasa={nasa}  />}
      
    </div>
  );
}

export default App;
