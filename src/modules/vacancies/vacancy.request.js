import getAxiosRequest from "../../utils/network/request";
import SystemException from "../../utils/SystemException";

const buildDeleteURL =(userId, vacantId ) => {
  return `/job-vacancies/${userId}/${vacantId}`
}

const host = `${process.env.SERVER_HOST}/api`;
const endPoints = {
  getVacancies: { url: "/job-vacancies", method: "GET" },
  createVacancy: { url: "/job-vacancies", method: "POST" },
  deleteVacancy: { url: buildDeleteURL, method: "DELETE" },
};

async function postVacancy(vacancy, token) {
  let response = null;
  const { url, method } = endPoints.createVacancy;
  response = await getAxiosRequest({
    method,
    url: `${host}${url}`,
    data: vacancy
  }, undefined, token);
  const { data } = response;
  if (!data) throw SystemException("Error creating vacancy", "error");
  return data;
}

async function getVacancies() {
  let response = null;
  const { url, method } = endPoints.getVacancies;
  response = await getAxiosRequest({
    method,
    url: `${host}${url}`,
  });
  const { data } = response;
  if (!data) throw SystemException("Error getting vacancies", "error");  
  return data.job_vacants;
}

async function deleteVacancy(userId, vacantId) {
  let response = null;
  const {  url, method } = endPoints.deleteVacancy;
  response = await getAxiosRequest({
    method,
    url: `${host}${url(userId, vacantId)}`,
  });
  const { data } = response;
  if (!data) throw SystemException("Error deleting vacancy", "error");
  return true;
}

export { postVacancy, getVacancies , deleteVacancy  };
