import getAxiosRequest from "../../utils/network/request";

const host = process.env.REACT_APP_NOT_SECRET_CODE
const endPoints = {
    getCatalogue: { url: '/catalogue', method: 'GET' },
    getThumbnails: { url: '/catalogue/thumbnails', method: 'POST' },
    getBundle: { url: '/catalogue/bundle', method: 'POST' },
  };

  
  export async function postVacancy() {
    let response= null;
    const { url, method } = endPoints.getCatalogue;
    response = await getAxiosRequest({
      method,
      url: `${host}${url}`,
    });
    const { data } = response;
    if (!data) throw new SystemException('', 'error');
    return data;
  }