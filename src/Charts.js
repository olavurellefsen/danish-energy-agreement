import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from './alert/Welcome'
import LineChart from './VictorySample'

const MainArea = styled.div`
  flex: 1;
  padding: 20px;
`

const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: ${props => (props.direction==='column' ? 'column' : 'row')};
`

const Charts = (props) => (
  <MainArea>
    {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
    <Flex>
      <LineChart selectedScenario={props.scenarioSelection.scenarioSelection} />
    </Flex>
  </MainArea>
)

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}


export default Charts