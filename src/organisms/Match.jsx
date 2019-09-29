import React from 'react'
import styled from 'styled-components'

const StyledMatch = styled.div`
  display: flex;
  margin: 10px 0px;
  align-items: center;
`

const StyledAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Match = ({match}) => {
  const {id, name} = match
  return (
    <StyledMatch>
      <StyledAvatar>
        {id}
      </StyledAvatar>
      <div>
        {name}
      </div>
    </StyledMatch>
  )
}

export default Match
