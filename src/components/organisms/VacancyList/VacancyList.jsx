import React from "react";
import VacancyItem from "../../molecules/VacancyItem/VacancyItem";

import "./VacancyList.scss";

function VacancyList(props) {
  const { vacancies } = props;

  return (
    <div className="vacancyList-container">
      {vacancies.map((vacancy) => {
        return <VacancyItem key={vacancy.id} vacancy={vacancy} />;
      })}
    </div>
  );
}

export default VacancyList;
