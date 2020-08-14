// import Search from "../../components/Search";
// const { default: Category } = require("../../components/Category");
const { useGet } = require("./useGet");
const { URL_BASE } = require("../../Constants/api");

export const useSearch = (media, search, page = 1, subsearch = false) => {
  const endpoints = {
    trending: `trending/${media}/week`,
    category: `${media}/${search}`,
    subsearch: `${media}/${search}/${subsearch}`,
    search: "search/multi",
  };
  //trending top_rated on_the_air
  //top_rated
  // media multi
  // search iron
  const query = media === "multi" ? `&query=${search}` : "";
  let endpoint;
  if (media === "multi") {
    endpoint = endpoints.search;
  } else if (subsearch) {
    endpoint = endpoints.subsearch
  } else {
    endpoint = endpoints[search] ? endpoints[search] : endpoints.category;
  }

  //query=asd

  return useGet(
    `${URL_BASE}/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}${query}&language=es-ES`
  );
};
