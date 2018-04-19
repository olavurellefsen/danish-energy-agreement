import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {VictoryChart, VictoryLabel, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar, VictoryTooltip} from 'victory';
import scenarios from './data/scenarios';

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
`;

const data = scenarios.scenarios;
    
class StackedBarChart extends React.Component {
  render() {
    let scenario = this.props.selectedScenario;
    let chartType = this.props.chartType;

    return (
      <div>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <ChartHeader x={50} y={24}
            text={chartType}
          />
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
            tickFormat={["2015", "2020", "2025", "2030", "2035", "2040", "2045", "2050"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (x)}
          />
          <VictoryStack>
            {              
              data[scenario][chartType].map(
                chartGroup => (
                  <VictoryBar 
                    key={chartGroup.group}
                    data={chartGroup.values.map(
                      chartGroupValue => (
                        {...chartGroupValue, label: chartGroup.group + ': ' + chartGroupValue.total.toFixed(2) }
                      )
                    )}
                    x='period'
                    y='total'
                    labelComponent={<VictoryTooltip/>}
                  />
                )
              )
            }
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }
}

StackedBarChart.propTypes = {
  selectedScenario: PropTypes.number.isRequired,
  chartType: PropTypes.string.isRequired
}

export default StackedBarChart;