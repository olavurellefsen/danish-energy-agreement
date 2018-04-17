import React from 'react'
import PropTypes from 'prop-types'
import AlertContainer from '../components/AlertContainer'
import AlertBody from '../components/AlertBody'
import CloseWindowIcon from '../components/CloseWindowIcon'
import Octicon from 'react-octicon'

const Welcome = (props) => (
  <AlertContainer>
    <AlertBody>
      Med dette værktøj kan du udforske forskellige scenarier i forbindelse med energiaftalen 2018.
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