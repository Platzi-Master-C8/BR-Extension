import React, { useEffect, useState } from "react";
import { Layout } from "../../components/templates/Layout/Layout";
import { getVacancies } from "../../modules/vacancies/vacancy.request";
import { ResponsiveNavBar } from "../../components/organisms/Navbar/Navbar";
import VacancyList from "../../components/organisms/VacancyList/VacancyList";

function Vacancies() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(async () => {
    const currentVacancies = await getVacancies();
    setVacancies(currentVacancies);
  }, []);

  return (
    <Layout>
      <ResponsiveNavBar title="Vacancies" />
      <VacancyList vacancies={vacancies} />
    </Layout>
  );
}

export { Vacancies };
