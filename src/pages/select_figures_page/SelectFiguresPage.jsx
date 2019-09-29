import React from 'react'

const SelectFiguresPage = ({match}) => {
  const dance = match.params.dance
  console.log('dance', dance)
  return (
    <div>Select figures page {dance}</div>
  )
}

export default SelectFiguresPage
