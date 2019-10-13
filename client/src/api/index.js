import { URL } from "../config";
import axios from "axios";

const getAllNotes = () => {
  return axios
    .get(URL)
    .then(res => res.data)
    .catch(e => console.error(e));
};

const deleteAllNotes = () => {
  return axios
    .delete(URL)
    .then(res => res.data)
    .catch(e => console.error(e));
};

const postData = obj => {
  return axios
    .post(URL, obj)
    .then(res => res.data)
    .catch(e => console.error(e));
};
//
// const deleteOne = id => {
//   return axios
//     .post(`${URL}/${id}`)
//     .then(res => res.data)
//     .catch(e => console.error(e));
// };

export {
  getAllNotes,
  postData,
  deleteAllNotes
  // deleteOne
};
