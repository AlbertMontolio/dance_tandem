import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

const StyledSelectFigures = styled.div`
  font-size: 20px;
`

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

const StyledSelect = styled.div`
  margin: 10px 0px;
`

const SelectFiguresPage = ({match}) => {
  const dance = match.params.dance
  console.log('dance', dance)
  return (
    <StyledSelectFigures>
      <div>{dance}</div>
      <StyledSelect>
        <div>Select your academy</div>
        <select>
          <option value="salsabor">Salsabor</option>
          <option value="dance_with_george">Dance with George</option>
          <option value="circulo">Círculo</option>
          <option value="salsamas">Salsamás</option>
        </select>
      </StyledSelect>
      
      <StyledSelect>
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
      </StyledSelect>
      <StyledOption to='/matches'>next</StyledOption>
    </StyledSelectFigures>
  )
}

export default SelectFiguresPage
