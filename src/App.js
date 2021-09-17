import React from "react";
import './App.css';
import axios from "axios";

import PageLayout from "./Components/PageLayout";
import {LinearProgress} from "@material-ui/core";

const endpoint = "http://localhost:9000/top-bus-lines";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(endpoint)
        .then((response) => {
        setData(response.data);
        })
        .catch((error) => {
            // TODO Handle errors
        });
  }, []);

    if (!data) return <LinearProgress />;

    return (
        <div className="Top-Lines-App">
          <PageLayout data={data}/>
        </div>
  );
}

export default App;
