import './app.css'
import GetAnswersBtn from './components/GetAnswersBtn.component'
import AnswerInput from './components/AnswerInput.component'
import NewGuessNumberBtn from './components/NewGuessNumberBtn.component'
import ResultTable from './components/ResultTable.component'

const resultTable = new ResultTable('resultTable')
const getAnswerBtn = new GetAnswersBtn('getAnswers', { resultTable })
const answerInput = new AnswerInput('guessNumber', { resultTable })
new NewGuessNumberBtn('guessNewNumber', { getAnswerBtn, answerInput })
