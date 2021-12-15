import React from "react";
import { TrackNew } from "../TrackNew/TrackNew";
import { TrackForm } from "../../components/organisms/TrackForm/TrackForm";
import { Layout } from "../../components/templates/Layout/Layout";
import { Navbar } from "../../components/molecules/Navbar/Navbar";
import { StarRating } from "../../components/molecules/StarRating/StarRating";
import { postVacancy } from "../../modules/vacancies/vacancy.request";

import { getUrl } from "Helpers/pageScraping.js";

function Popup() {
  const [inputValue, setInputValue] = React.useState({});
  const [rating, setRating] = React.useState("3");

  async function sendFormData(event) {
    event.preventDefault();
    const vacancyToCreate = {
      title: inputValue.position,
      link: inputValue.link,
      company: inputValue.company,
      salary: inputValue.offeredSalary,
      date_application: null,
      interest: 3,
      notes: inputValue.notes,
      user_id: 1,
    };
    await postVacancy(vacancyToCreate);
  }

  React.useEffect(async () => {
    const response = await getUrl();
    setInputValue({
      ...inputValue,
      ...response,
    });
  }, [])

  return (
    <Layout>
      <Navbar title="New Tracking" />
      <TrackNew>
        <TrackForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={sendFormData}
        >
          <StarRating rating={rating} setRating={setRating} />
        </TrackForm>
      </TrackNew>
      {/* <button type="submit">Send</button> */}
    </Layout>
  );
}

export { Popup };
