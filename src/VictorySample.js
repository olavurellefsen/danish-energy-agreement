import React from 'react';
import PropTypes from 'prop-types'
import {VictoryChart, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar} from 'victory';
import scenarios from './data/scenarios';

const data = scenarios.scenarios;
    
class LineChart extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
            tickFormat={["2015", "2020", "2025", "2030", "2035", "2040", "2045", "2050"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (x)}
          />
          <VictoryStack>
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Affald CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Bio CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["El og varme sektorens CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Husholdningers CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Industriel CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Konveteringssektorens CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Land transport CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Luftfart CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[this.props.selectedScenario].CO2emissions["Søfart CO2"]} x="Period" y="Total" />
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }
}

LineChart.propTypes = {
  selectedScenario: PropTypes.number.isRequired,
}

export default LineChart;