import React from 'react'
import Card from './Card'
import { CharConsumer } from '../context'


const CardsCointainer = () => {
    const {characters} = CharConsumer()


  return (
    <Card characters={characters} />
  )
}

export default CardsCointainer