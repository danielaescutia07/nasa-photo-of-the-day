import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from '../constants';
import axios from "axios";
import Picture from "./Picture";
import Header from "./Header";
import Footer from "./Footer";

import styled from "styled-components";

const StyleAll = styled.div `
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.font};
`

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
    <StyleAll className="App">
      <Header />
      {nasa && <Picture image={nasa.url} title={nasa.title} date={nasa.date} explanation={nasa.explanation} />}
      <Footer copyright={nasa.copyright} />
    </StyleAll>
  );
}

export default App;
