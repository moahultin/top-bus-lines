import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

import Acc from "./Components/Acc";
import PageLayout from "./Components/PageLayout";

const url = "http://localhost:9000/top-bus-lines";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data);
    });
  }, []);

    if (!data) return null;

    return (
        <div className="Top-Lines-App">
          <PageLayout data={data}/>
        </div>
  );
}

export default App;
