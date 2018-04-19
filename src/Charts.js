import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from './alert/Welcome'
import StackedBarChart from './StackedBarChart'

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
      <StackedBarChart chartType='CO2 emissioner' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Biobrændsels forbrug' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='El produktion' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='El kapacitet' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='El net eksport' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Fjernvarme produktion' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Husholdningers varmeforbrug' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Industriens energiforbrug' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Transport sektorens energiforbrug' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Transport - bil bestanden' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='Miljø og energi afgifter' selectedScenario={props.scenarioSelection.scenarioSelection} />
      <StackedBarChart chartType='System omkostninger' selectedScenario={props.scenarioSelection.scenarioSelection} />
    </Flex>
  </MainArea>
)

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}


export default Charts