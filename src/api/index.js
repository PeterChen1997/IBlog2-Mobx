import config from '../config'
import axios from 'axios'

const handleErrors = err => {
  console.log(err)
}

const requests = {
  delete: url =>
    axios
      .delete(`${config.BASE_URL}${url}`)
      .catch(handleErrors),
  get: url =>
    axios
      .get(`${config.BASE_URL}${url}`)
      .catch(handleErrors),
  put: (url, body) =>
    axios
      .put(`${config.BASE_URL}${url}`, body)
      .catch(handleErrors),
  post: (url, body) =>
    axios
      .post(`${config.BASE_URL}${url}`, body)
      .catch(handleErrors),
};

export default requests