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

    let minYaxisValueStacked = this.props.minY;
    let maxYaxisValueStacked = this.props.maxY;

    let maxYaxisValueLine = 1;
    let minYaxisValueLine = 0;
    if(combinedChart===true) {
      maxYaxisValueLine = this.props.maxY2;
      minYaxisValueLine = this.props.minY2;
    }

    let yDomain = [0, 1];
    if(minYaxisValueStacked<0 || minYaxisValueLine<0) {
      let stackedRatio = minYaxisValueStacked/maxYaxisValueStacked;
      let lineRatio = minYaxisValueLine/maxYaxisValueLine;
      yDomain = stackedRatio<lineRatio ? [stackedRatio,1] : [lineRatio,1];
    }

    const colors = [
      "#ffcc00", "#ff9900", "#ff6600", "#ff0000", "#990000", "#ff0099", "#cc3399",
      "#990066", "#660066", "#660099", "#3366cc", "#33ccff", "#99cc33", "#66cc00",
      "#aad199", "#45535c", "#471442", "#612e30", "#7a713c", "#09e682", "#160154", "#fc53ec",
      "#454023", "#4b7060", "#4221a6", "#f2aceb", "#ede095", "#0395f7", "#7346fa", "#82627f"
    ];

    return (
      <div>
        <VictoryChart
          domainPadding={20}
          width={400}
          height={400}
          padding={{left: 80, right: 50, top: 50, bottom: 50}}
          theme={VictoryTheme.material}
          domain={{ y: yDomain }}
        >
          <ChartHeader x={50} y={24}
            text={chartType}
          />
          <VictoryAxis
            key={0}
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
            tickFormat={periods}
          />
          <VictoryAxis
            dependentAxis
            key={2}
            offsetX={80}
            tickFormat={(t) => (t*maxYaxisValueStacked)}
            label={this.props.label}
          />
          {(combinedChart===true && this.props.Y2Percentage===false) &&
            <VictoryAxis
              dependentAxis
              key={3}
              offsetX={350}
              label={this.props.label2}
              style={{
                axis: { stroke: 'red' },
                axisLabel: { fill: 'red', padding: -50},
                ticks: { padding: -25 },
                tickLabels: { fill: 'red', textAnchor: 'start' }
              }}              
              tickFormat={(t) => (t*maxYaxisValueLine)}
            />
          }
          {(combinedChart===true&& this.props.Y2Percentage===true) &&
            <VictoryAxis
              dependentAxis
              key={3}
              offsetX={350}
              label={this.props.label2}
              style={{
                axis: { stroke: 'red' },
                axisLabel: { fill: 'red', padding: -50},
                ticks: { padding: -25 },
                tickLabels: { fill: 'red', textAnchor: 'start' }
              }}              
              tickFormat={(t) => `${t*maxYaxisValueLine*100}%`}
            />
          }          
          <VictoryStack>
            {              
              dataStackedBar.map(
                (chartGroup, i) => (
                  <VictoryBar 
                    key={chartGroup.group}
                    data={chartGroup.values.map(
                      chartGroupValue => (
                        {...chartGroupValue, label: chartGroup.group + ': ' + chartGroupValue.total.toFixed(2) }
                      )
                    )}
                    x='period'
                    y={(datum) => datum['total'] / maxYaxisValueStacked}
                    labelComponent={<VictoryTooltip/>}
                    style={{
                      data: {fill: colors[i]}
                    }}
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
              y={(datum) => datum['total'] / maxYaxisValueLine}
              animate={{ duration: 500 }}
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
  combinedChart: PropTypes.bool.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  minY2: PropTypes.number,
  maxY2: PropTypes.number,  
  label: PropTypes.string.isRequired,
  label2: PropTypes.string,
  Y2Percentage: PropTypes.bool
}

export default StackedBarChart;