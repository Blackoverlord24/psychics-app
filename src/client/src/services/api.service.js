export default async function () {
  const rawResponse = await fetch('../answers', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })

  return await rawResponse.json()
}