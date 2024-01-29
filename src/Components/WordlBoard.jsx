import Grid from './Grid/Grid'
import React , {useContext}from 'react'
import Keyboard from './Keyboard/Keyboard'
import { WordleContext } from '../App'

function WordlBoard() {
  const {word} = useContext(WordleContext)
  return (
    <div>
      <h1 className='font-extrabold text-5xl m-4'>WORDLE</h1>
      <h5></h5>
      <Grid/>
      <Keyboard/>
      <small className='m-5 font-semibold' >#Refresh Page to play again with different word.</small>
      <small className='rotate-180' > {word} </small>
    </div>
  )
}

export default WordlBoard