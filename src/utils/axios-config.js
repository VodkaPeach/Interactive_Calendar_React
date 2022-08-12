const BACKEND_INDEX_URL = "https://calendar-hongxu.herokuapp.com/"

export function axiosConfig(method, route, data){
  return {
    method,
    url:`${BACKEND_INDEX_URL}${route}`,
    data,
  };
}