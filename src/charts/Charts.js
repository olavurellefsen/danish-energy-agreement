import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
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
        <StackedBarChart chartName='_CO2 emissioner og VE andel' chartTitle='CO2-emissioner og VE-andel' selectedScenario={selectedScenario} combinedChart={true} label="Kt" minY={-5000} maxY={40000} minY2={0} maxY2={1} label2="Vedvarende energi andel" Y2Percentage={true} />
        <StackedBarChart chartName='_Biobrændsels forbrug' chartTitle='Biobrændsels-forbrug' selectedScenario={selectedScenario} combinedChart={false} label="PJ" minY={0} maxY={400} />
        <StackedBarChart chartName='_Elproduktion' chartTitle='El-produktion' selectedScenario={selectedScenario} combinedChart={false} label="PJ" minY={0} maxY={400} />
        <StackedBarChart chartName='_Elkapacitet' chartTitle='El-kapacitet' selectedScenario={selectedScenario} combinedChart={false} label="MW" minY={0} maxY={40000} />
        <StackedBarChart chartName='_El netto eksport' chartTitle='El-netto-eksport' selectedScenario={selectedScenario} combinedChart={true} label="PJ" label2="Netto eksport (PJ)" minY={-100} maxY={160}  minY2={-100} maxY2={160} Y2Percentage={false} />
        <StackedBarChart chartName='_Fjernvarmeproduktion' chartTitle='Fjernvarme-produktion' selectedScenario={selectedScenario} combinedChart={false} label="PJ" minY={0} maxY={200} />
        <StackedBarChart chartName='_Husholdningers varmeforbrug' chartTitle='Husholdningers varmeforbrug' selectedScenario={selectedScenario} combinedChart={true} label="PJ" label2="Energibesparelser (PJ)" minY={0} maxY={160} minY2={0} maxY2={24} Y2Percentage={false} />
        <StackedBarChart chartName='_Industriens energiforbrug' chartTitle='Industriens energiforbrug' selectedScenario={selectedScenario} combinedChart={true} label="PJ" label2="Energibesparelser (PJ)" minY={0} maxY={400} minY2={0} maxY2={60} Y2Percentage={false} />
        <StackedBarChart chartName='_Transport sektorens energifor' chartTitle='Transportsektorens energiforbrug' selectedScenario={selectedScenario} combinedChart={false} label="PJ" minY={0} maxY={350} />
        <StackedBarChart chartName='_Transport - bil bestanden' chartTitle='Transport - bil-bestand' selectedScenario={selectedScenario} combinedChart={false} label="1000 stk" minY={0} maxY={3000} />
        <StackedBarChart chartName='_Miljø og energi afgifter' chartTitle='Miljø- og energi-afgifter' selectedScenario={selectedScenario} combinedChart={false} label="mia.kr" divideValues={1000} minY={-10000} maxY={120000} />
        <StackedBarChart chartName='_Systemomkostninger' chartTitle='Systemomkostninger' selectedScenario={selectedScenario} combinedChart={false} label="mia.Kr" divideValues={1000} minY={0} maxY={180000} />
      </Flex>
    </MainArea>
  );
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}

export default Charts;