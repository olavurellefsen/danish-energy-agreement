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



const Charts = (props) => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  return(
    <MainArea>
      {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
      <Flex>
        <StackedBarChart chartType='CO2 emissioner' selectedScenario={selectedScenario} combinedChart={true} />
        <StackedBarChart chartType='Biobrændsels forbrug' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='El produktion' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='El kapacitet' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='El net eksport' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='Fjernvarme produktion' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='Husholdningers varmeforbrug' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='Industriens energiforbrug' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='Transport sektorens energiforbrug' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='Transport - bil bestanden' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='Miljø og energi afgifter' selectedScenario={selectedScenario} combinedChart={false} />
        <StackedBarChart chartType='System omkostninger' selectedScenario={selectedScenario} combinedChart={false} />
      </Flex>
    </MainArea>
  );
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}


export default Charts