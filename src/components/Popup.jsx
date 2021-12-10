import React from "react";
import { TrackNew } from "../pages/TrackNew";
import { TrackForm } from './TrackForm';
import { Layout } from "./Layout";
import { Navbar } from "./Navbar";


function Popup() {
  const [inputValue, setInputValue] = React.useState({});

  
  return (
      <Layout>
        <Navbar title="New Tracking" />
          <TrackNew>
            <TrackForm
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </TrackNew>
      </Layout>
  );
}

export { Popup };
