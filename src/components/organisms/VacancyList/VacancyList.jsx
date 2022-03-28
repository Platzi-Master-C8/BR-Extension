import React from "react";
import { deleteVacancy } from "../../../modules/vacancies/vacancy.request";
import VacancyItem from "../../molecules/VacancyItem/VacancyItem";

import "./VacancyList.scss";

function VacancyList(props) {
  const { vacancies, setVacancies } = props;

  const deleteVacancyAction = async (vacancyId) => {
    try {
      await deleteVacancy(1, vacancyId);
      console.log("paso porla buena");
      const currentVacancies = vacancies.filter(
        (vacancy) => vacancy.id !== vacancyId
      );
      console.log(currentVacancies);
      setVacancies(currentVacancies);
    } catch (error) {
      console.log("paso porla mala");
      console.log(error);
    }
  };

  return (
    <div className="vacancyList-container">
      {vacancies.map((vacancy) => {
        return (
          <VacancyItem
            key={vacancy.id}
            vacancy={vacancy}
            deleteVacancyAction={deleteVacancyAction}
          />
        );
      })}
    </div>
  );
}

export default VacancyList;
