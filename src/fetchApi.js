const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/llFawVoYD7zLAfvY9jQn/scores/';

// const fetchApi = async () => {
//   const res = await fetch(apiUrl);
//   const result = res.json();
//   return result;
// };

const postApi = (score) => {
  const scoreResult = fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(score),
  });
  return scoreResult.json;
};

export default postApi;