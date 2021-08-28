export const postData = async (path, body) => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({description: body})
  })
  const json = await response.json();
  return json
}