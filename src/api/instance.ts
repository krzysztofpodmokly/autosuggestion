import axios from "axios";
// http://universities.hipolabs.com/search?name=middle&country=Turkey
export const instance = axios.create({
  baseURL: "http://universities.hipolabs.com/search?country=",
});
