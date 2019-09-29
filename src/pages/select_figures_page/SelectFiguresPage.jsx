import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

const StyledOption = styled(NavLink)`
	background-color: white;
	margin-bottom: 20px;
	color: black;
	border-radius: 10px;
	padding: 5px 10px;
	font-size: 20px;
	font-weight: bold;
	width: 100%;
	text-align: center;
	text-underscore: none;
`

const SelectFiguresPage = ({match}) => {
  const dance = match.params.dance
  console.log('dance', dance)
  return (
    <div>
      <div>{dance}</div>
      <div>Select your academy</div>
      <select>
        <option value="salsabor">Salsabor</option>
        <option value="dance_with_george">Dance with George</option>
        <option value="circulo">Círculo</option>
        <option value="salsamas">Salsamás</option>
      </select>
      <div>Select the course</div>
      <select>
        <option value="beginner_1">Beginner 1</option>
        <option value="beginner_2">Beginner 2</option>
        <option value="intermediate_1">Intermediate 1</option>
        <option value="intermediate_2">Intermediate 2</option>
        <option value="intermediate_3">Intermediate 3</option>
        <option value="intermediate_4">Intermediate 4</option>
        <option value="advance_1">Advance 1</option>
      </select>
      <StyledOption to='/matches'>next</StyledOption>
    </div>
  )
}

export default SelectFiguresPage
