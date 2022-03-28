import React, { useEffect, useState } from "react";
import { Layout } from "../../components/templates/Layout/Layout";
import { getVacancies } from "../../modules/vacancies/vacancy.request";
import { ResponsiveNavBar } from "../../components/organisms/Navbar/Navbar";
import VacancyList from "../../components/organisms/VacancyList/VacancyList";
import { Typography } from "@mui/material";
import { MoodBad } from "@mui/icons-material";

function Vacancies() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(async () => {
    const currentVacancies = await getVacancies();
    setVacancies(currentVacancies);
  }, []);

  return (
    <Layout>
      <ResponsiveNavBar title="Vacancies" />
      {vacancies.length > 0 ? (
        <VacancyList vacancies={vacancies} setVacancies={setVacancies} />
      ) : (
        <>
          <Typography>You don't have vacancies.</Typography>
          <br />
          <MoodBad fontSize="large" />
        </>
      )}
    </Layout>
  );
}

export { Vacancies };
