import React from 'react'
import PropTypes from 'prop-types'
import MultiLineChart from './charts/MultiLineChart'
import MainArea from './components/MainArea'
import Flex from './components/Flex'
import Welcome from './alert/Welcome'
import LineChart from './VictorySample'

const Charts = (props) => (
  <MainArea>
    {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
    <Flex>
      <LineChart/>
    </Flex>
  </MainArea>
)

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  UpdateCurrentRegion: PropTypes.func.isRequired,
  UpdateWorldView: PropTypes.func.isRequired,
  closeWelcome: PropTypes.func.isRequired,
  onRegionItemChange: PropTypes.func.isRequired
}


export default Charts