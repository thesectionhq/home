import axios from "axios";

/**
 * Interacts with the Section Strapi API
 * @param {Object} requestConfig Request configuration
 * @param {'post'|'get'|'delete'|'put'} requestConfig.method HTTP verb
 * @param {String} requestConfig.url HTTP verb
 * @param {Object} requestConfig.headers HTTP http header
 * @param {Object} requestConfig.data data to send to backend
 * @return {Promise<{ data, headers, status, statusText, config }>}
 */

type RequestConfigType = {
  method: "post" | "get" | "delete" | "put";
  url: string;
  headers?: any;
  data?: any;
};

export const sectionServiceClient = async (requestConfig: RequestConfigType) => {
  const baseURL = process.env.API_URL;
  return axios.create({
    baseURL,
    timeout: 150000,
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  })(requestConfig);
};
