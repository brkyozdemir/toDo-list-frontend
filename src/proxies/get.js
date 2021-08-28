export const getData = async (path) => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const json = await response.json();
  return json
}