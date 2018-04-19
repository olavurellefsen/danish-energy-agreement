import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Octicon from 'react-octicon'

const AlertContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border-width: 1px;
  border-color: blue;
  border-style: solid;
  background-color: mintcream;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: row;
`

const AlertBody = styled.p`
  font-size: 1em;
  margin: 0px;
  align-self: center;
  flex: 1;
`

const CloseWindowIcon = styled.div`
  margin: 0px;
  border: 0;
  flex-shrink: 0;
  align-self: flex-start;
  :hover {
    cursor: pointer;
  }
`

const Welcome = (props) => (
  <AlertContainer>
    <AlertBody>
      DEMO DATA - BEMÆRK VENLIGST AT DETTE IKKE ER DEN ENDELIGE UDGAVE - Med dette værktøj kan du udforske forskellige scenarier i forbindelse med energiaftalen 2018.
      Vælg et scenarie i venstre menu og se resultatet i graferne nedenfor.
    </AlertBody>
    <CloseWindowIcon onClick={(event) => props.closeWelcome(event, 'showWelcome', false)}>
      <Octicon name='x' />
    </CloseWindowIcon>
  </AlertContainer>
)

Welcome.propTypes = {
  closeWelcome: PropTypes.func.isRequired
}

export default Welcome