import React, { useState, useEffect } from "react";
import { Layout } from "../../components/templates/Layout/Layout";
import { ResponsiveNavBar } from "../../components/organisms/Navbar/Navbar";
import { StarRating } from "../../components/molecules/StarRating/StarRating";
import { TrackForm } from "../../components/organisms/TrackForm/TrackForm";
import { getUrl } from "Helpers/pageScraping.js";
import { postVacancy } from "../../modules/vacancies/vacancy.request";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from '@mui/material/CircularProgress';

import './TrackNew.scss';
import { ConstructionOutlined } from "@mui/icons-material";

function TrackNew() {
  const [inputValue, setInputValue] = useState({});
  const [rating, setRating] = useState("3");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

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
    // const token = await getAccessTokenSilently()
    const token = localStorage.getItem("token");
    createVacancy(vacancyToCreate, token);
  }

  const createVacancy = async (vacancyData, token) => {
    try {
      setLoading(true);
      let response = await postVacancy(vacancyData, token);
      if (response.code === 201) {
        setLoading(false);
        console.log("success!!!")
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(async () => {
    const response = await getUrl();
    setInputValue({
      ...inputValue,
      ...response,
    });
  }, []);

  return (
    <Layout>
      <ResponsiveNavBar title="New Tracking" />
      {!!loading ? (
        <div className="TrackForm__loading-container">
          <CircularProgress
          size={"55px"} className="loading-animation" color="secondary" />
        </div>
      ) : (
        <div className="TrackForm__container">
          <TrackForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSubmit={sendFormData}
          >
            <StarRating rating={rating} setRating={setRating} />
          </TrackForm>
        </div>
      )}
    </Layout>
  );
}

export { TrackNew };
