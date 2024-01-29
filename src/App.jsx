import { createContext, useState, useEffect } from 'react'
import './App.css'
import Grid from './Components/Grid/Grid'
import Keyboard from './Components/Keyboard/Keyboard'
import WordlBoard from './Components/WordlBoard'
import Words from './Api'

  export const WordleContext = createContext()

function App() {

  const [word, setWord] = useState("Cheek")
  const [completedRows, setCompletedRows] = useState([])
  const [guessWord, setGuessWord] = useState('')
  const [currentRow, SetCurrentRow] = useState(0)
  const [wordsData, setWordsData] = useState([])

  useEffect(() => {
    const fetchWords = async () => {
      const words = await Words()
      setWordsData(words)

      const randomIndex = Math.floor(Math.random() * words.length)
      setWord(words[randomIndex])
    }
    fetchWords()
  }, [])

  function guessTheWord(char){
    if(guessWord.length === 5 ) return
    setGuessWord(guessWord.concat(char))
  }

  function pressEnter(){
    if(guessWord.length < 5) return
    if(!wordsData.includes(guessWord)) return alert("Word not found in the list")
    if(guessWord === word ) alert("Congratulations you've guessed right!!!")

    SetCurrentRow(currentRow+1)
    setCompletedRows([...completedRows, currentRow])
    setGuessWord("")
  }

  function backspace(){
    setGuessWord(guessWord.slice(0, guessWord.length-1))
  }

  return (
    <WordleContext.Provider value={{
      guessTheWord,
      pressEnter,
      completedRows,
      currentRow,
      word,
      guessWord,
      backspace,
    }}>
      <WordlBoard/>
    </WordleContext.Provider>
  )
}

export default App
