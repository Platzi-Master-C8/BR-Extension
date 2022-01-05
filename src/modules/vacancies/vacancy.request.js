import getAxiosRequest from "../../utils/network/request";

const host = `${process.env.SERVER_HOST}/api`;
const endPoints = {
  getVacancies: { url: "/job_vacant", method: "GET" },
  createVacancy: { url: "/job_vacant", method: "POST" },
};

async function postVacancy(vacancy) {
  let response = null;
  const { url, method } = endPoints.createVacancy;
  response = await getAxiosRequest({
    method,
    url: `${host}${url}`,
    data: vacancy
  });
  const { data } = response;
  if (!data) throw new SystemException("", "error");
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
  if (!data) throw new SystemException("", "error");
  return data;
}

export { postVacancy, getVacancies as getVacancy };
