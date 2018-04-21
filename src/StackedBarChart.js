import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {VictoryChart, VictoryLabel, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar, VictoryLine, VictoryTooltip} from 'victory';
import stackedBar from './data/stackedBar';
import line from './data/line';

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
`;
    
class StackedBarChart extends React.Component {
  render() {
    const scenario = this.props.selectedScenario;
    const chartType = this.props.chartType;
    const combinedChart = this.props.combinedChart;
    const dataStackedBar = stackedBar.scenarios[scenario][chartType];
    const dataLine = line.scenarios;

    const periods = ["2015", "2020", "2025", "2030", "2035", "2040", "2045", "2050"];
    let periodSums = periods.map((year) => ({period: year, total: 0}));
    dataStackedBar.reduce((res1, chartGroup) => {
      chartGroup.values.reduce((res, value) => {
        let foundIndex = periodSums.findIndex(x => x.period === value.period);
        periodSums[foundIndex].total += value.total;
        return res;
      }, periodSums);
      return periodSums;
    });    
    let maxStackedValue = Object.keys(periodSums).reduce(function(m, k){ return periodSums[k].total > m ? periodSums[k].total : m }, -Infinity);
    let order = Math.floor(Math.log(maxStackedValue) / Math.LN10 + 0.000000001);
    let maxYaxisValue = Math.pow(10, order) * (parseInt(maxStackedValue.toPrecision(1),0)+1);

    return (
      <div>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
          domain={{ y: [0, 1] }}
        >
          <ChartHeader x={50} y={24}
            text={chartType}
          />
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
            tickFormat={periods}
          />
          <VictoryAxis
            dependentAxis
            key={0}
            tickValues={[0.25, 0.50, 0.75, 1.00]}
            tickFormat={(t) => (t*maxYaxisValue)}            
          />
          {(combinedChart===true) &&
            <VictoryAxis
              dependentAxis
              key={1}
              offsetX={300}
              style={{
                axis: { stroke: 'red' },
                ticks: { padding: -25 },
                tickLabels: { fill: 'red', textAnchor: 'start' }
              }}              
              tickValues={[0.25, 0.50, 0.75, 1.00]}
              tickFormat={(t) => (t*100)}
            />
          }
          <VictoryStack>
            {              
              dataStackedBar.map(
                chartGroup => (
                  <VictoryBar 
                    key={chartGroup.group}
                    data={chartGroup.values.map(
                      chartGroupValue => (
                        {...chartGroupValue, label: chartGroup.group + ': ' + chartGroupValue.total.toFixed(2) }
                      )
                    )}
                    x='period'
                    y={(datum) => datum['total'] / maxYaxisValue}
                    labelComponent={<VictoryTooltip/>}
                  />
                )
              )
            }
          </VictoryStack>
          {(combinedChart===true) &&
            <VictoryLine
              data={dataLine[scenario][chartType][0].values}
              x='period'
              style={{ data: { stroke: 'red' } }}
              y={(datum) => 100*datum['total'] / 100}
            />
          }
          </VictoryChart>
      </div>
    )
  }
}

StackedBarChart.propTypes = {
  selectedScenario: PropTypes.number.isRequired,
  chartType: PropTypes.string.isRequired,
  combinedChart: PropTypes.bool.isRequired
}

export default StackedBarChart;