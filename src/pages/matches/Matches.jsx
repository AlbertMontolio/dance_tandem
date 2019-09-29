import React from 'react'
import Match from '../../organisms/Match'

const matches = [
  {
    id: 1, 
    name: 'Matthias Schmidt'
  },
  {
    id: 2,
    name: 'Federico Gonzalez'
  },
  {
    id: 3,
    name: 'Lua Vettel'
  },
  {
    id: 4,
    name: 'Michael Zicks'
  },
  {
    id: 5,
    name: 'Laura Hernandez'
  }
]

const Matches = () => {
  return (
    <div>
      <h2>People who did this course:</h2>
      {matches.map((match) => {
        console.log('match', match)
        return (
          <Match match={match}/>
        )
      })}
    </div>
  )
}

export default Matches
