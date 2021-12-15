import getAxiosRequest from "../../utils/network/request";

const host = `${process.env.SERVER_HOST}/api`;
const endPoints = {
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

export { postVacancy };
