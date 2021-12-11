import React from "react";
import { TrackNew } from "../pages/TrackNew";
import { TrackForm } from "./TrackForm";
import { Layout } from "./Layout";
import { Navbar } from "./Navbar";
import { StarRating } from "./StarRating";

function Popup() {
  const [inputValue, setInputValue] = React.useState({});
  const [rating, setRating] = React.useState('1')

  return (
    <Layout>
      <Navbar title="New Tracking" />
      <TrackNew>
        <TrackForm
          inputValue={inputValue}
          setInputValue={setInputValue}
        >
          <StarRating rating={rating} setRating={setRating} />
        </TrackForm>
      </TrackNew>
    </Layout>
  );
}

export { Popup };
