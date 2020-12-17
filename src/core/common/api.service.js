import axios from "axios";
import { API_URL } from "@/core/common/config";

export default {
  init() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = API_URL;
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, params) {
    return axios.post(resource, params);
  },
};
