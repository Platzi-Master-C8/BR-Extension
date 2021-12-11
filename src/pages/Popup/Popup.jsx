import React from "react";
import { TrackNew } from "../TrackNew/TrackNew";
import { TrackForm } from "../../components/organisms/TrackForm/TrackForm";
import { Layout } from "../../components/templates/Layout/Layout";
import { Navbar } from "../../components/molecules/Navbar/Navbar";
import { StarRating } from "../../components/molecules/StarRating/StarRating";

function Popup() {
  const [inputValue, setInputValue] = React.useState({});
  const [rating, setRating] = React.useState('3')

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
