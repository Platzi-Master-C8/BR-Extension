import React from "react";
import { Layout } from "../../components/templates/Layout/Layout";
import { ResponsiveNavBar } from "../../components/organisms/Navbar/Navbar";
import { StarRating } from "../../components/molecules/StarRating/StarRating";
import { TrackForm } from "../../components/organisms/TrackForm/TrackForm";
import { getUrl } from "Helpers/pageScraping.js";
import { postVacancy } from "../../modules/vacancies/vacancy.request";

function TrackNew() {
  const [inputValue, setInputValue] = React.useState({});
  const [rating, setRating] = React.useState("3");

  async function sendFormData(event) {
    event.preventDefault();
    const vacancyToCreate = {
      title: inputValue.position,
      link: inputValue.link,
      company: inputValue.company,
      salary_from: inputValue.offeredSalary,
      salary_to: inputValue.offeredSalary + 10,
      currency: inputValue.currency,
      date_application: "2022-01-10",
      interest: parseInt(rating),
      notes: inputValue.notes,
      user_id: 1,
    };
    console.log(vacancyToCreate);
    let result = await postVacancy(vacancyToCreate);
    if (resulta.data) {
      handleCreateVacacySuccess();
    }
  }

  React.useEffect(async () => {
    const response = await getUrl();
    setInputValue({
      ...inputValue,
      ...response,
    });
  }, []);

  return (
    <Layout>
      <ResponsiveNavBar title="New Tracking" />
      <div className="TrackForm__container">
        <TrackForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={sendFormData}
        >
          <StarRating rating={rating} setRating={setRating} />
        </TrackForm>
      </div>
    </Layout>
  );
}

export { TrackNew };
