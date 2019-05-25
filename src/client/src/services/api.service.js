export default class ApiService {
  static async getAnswersHistory() {
    const response = await makeRequest('answers-history')

    return await response.answersHistory
  }

  static async getPsychicsRate() {
    const response = await makeRequest('psychics-rate')

    return await response.psychicsRate
  }

  static async getAnswers() {
    const response = await makeRequest('answers')
    return await response
  }

  static async updatePsychicsRate(answerNumber) {
    const response = await makeRequest('psychics-rate', 'PUT', { answer: answerNumber } )
    return await response.psychicsRate
  }
}

async function makeRequest(url, method = 'GET', body = null) {
  const rawResponse = await fetch(`../${url}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : null
  })

  return await rawResponse.json()
}