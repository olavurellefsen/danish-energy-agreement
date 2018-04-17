import React from 'react'
import PropTypes from 'prop-types'
import MultiLineChart from './charts/MultiLineChart'
import MainArea from './components/MainArea'
import Flex from './components/Flex'
import Welcome from './alert/Welcome'

const Charts = (props) => (
  <MainArea>
    {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
    <Flex>
      <MultiLineChart type="3" scenarioSelection={props.scenarioSelection} UpdateWorldView={props.UpdateWorldView} />
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