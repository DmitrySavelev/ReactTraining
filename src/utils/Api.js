const BASE_URL = "https://dummyjson.com";

const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка при запросе постов:", error);
    });
};

export const getPostsApi = () => fetchData(`${BASE_URL}/posts`);
export const getOnePostApi = (id) => fetchData(`${BASE_URL}/posts/${id}`);
export const getCommentsData = (id) => fetchData(`${BASE_URL}/comments/${id}`);
