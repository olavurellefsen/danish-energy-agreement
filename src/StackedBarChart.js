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

const getStackedValues = (dataSet, periods) => {
  let periodSums = periods.map((year) => ({period: year, total: 0}));
  dataSet.reduce((res1, chartGroup) => {
    chartGroup.values.reduce((res, value) => {
      let foundIndex = periodSums.findIndex(x => x.period === value.period);
      periodSums[foundIndex].total += value.total;
      return res;
    }, periodSums);
    return periodSums;
  });
  return periodSums;
}

const getNegativeStackedValues = (dataSet, periods) => {
  let negativeDataStackedBar = dataSet.map((chartGroup) => {
    let negativeValues = chartGroup.values.filter((value) => {
      return value.total<0;
    });
    return {group: chartGroup.group, values: negativeValues};
  });
  return getStackedValues(negativeDataStackedBar, periods);
}

const getMaxYaxisValue = (dataSet) => {
  let maxValue = Object.keys(dataSet).reduce(function(m, k){ return dataSet[k].total > m ? dataSet[k].total : m }, -Infinity);
  let order = Math.floor(Math.log(Math.abs(maxValue)) / Math.LN10 + 0.000000001);
  if(order<0) {order++;}
  return Math.pow(10, order) * (parseInt(maxValue.toPrecision(1),0)+1);
}

const getMinYaxisValue = (dataSet) => {
  let minValue = Object.keys(dataSet).reduce(function(m, k){ return dataSet[k].total < m ? dataSet[k].total : m }, Infinity);
  let order = Math.floor(Math.log(Math.abs(minValue)) / Math.LN10 + 0.000000001);
  return Math.pow(10, order) * (parseInt(minValue.toPrecision(1),0));
}

class StackedBarChart extends React.Component {
  render() {
    const scenario = this.props.selectedScenario;
    const chartType = this.props.chartType;
    const combinedChart = this.props.combinedChart;
    const dataStackedBar = stackedBar.scenarios[scenario][chartType];
    const dataLine = line.scenarios;

    const periods = ["2015", "2020", "2025", "2030", "2035", "2040", "2045", "2050"];
    let periodSums = getStackedValues(dataStackedBar, periods);
    let maxYaxisValueStacked = getMaxYaxisValue(periodSums);
    let minYaxisValueStacked = 0;

    periodSums = getNegativeStackedValues(dataStackedBar, periods);
    minYaxisValueStacked = getMinYaxisValue(periodSums);

    let maxYaxisValueLine = 1;
    let minYaxisValueLine = 0;
    if(combinedChart===true) {
      let lineValues = dataLine[scenario][chartType][0].values;
      maxYaxisValueLine = getMaxYaxisValue(lineValues);
      minYaxisValueLine = getMinYaxisValue(lineValues);
    }

    let yDomain = [0, 1];
    if(minYaxisValueStacked<0 || minYaxisValueLine<0) {
      let stackedRatio = minYaxisValueStacked/maxYaxisValueStacked;
      let lineRatio = minYaxisValueLine/maxYaxisValueLine;
      yDomain = stackedRatio<lineRatio ? [stackedRatio,1] : [lineRatio,1];
    }

    const colors = [
      "#8a0000", "#64f029", "#2472a6", "#493d6e", "#c98d8d", "#19330d", "#1b2d38",
      "#826dbf", "#42070a", "#998200", "#43732f", "#a3daff", "#871a7c", "#ab3f45", "#ffde21",
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
            offsetY={50}
          />         
          <VictoryAxis
            dependentAxis
            key={2}
            offsetX={80}
            tickFormat={(t) => (t*maxYaxisValueStacked)}
            label={this.props.label}
            style={{
              axisLabel: {padding: 55}
            }}
          />
          {(combinedChart===true) &&
            <VictoryAxis
              dependentAxis
              key={3}
              offsetX={350}
              label={this.props.label2}
              style={{
                axis: { stroke: 'red' },
                axisLabel: { fill: 'red', padding: -45},
                ticks: { padding: -25 },
                tickLabels: { fill: 'red', textAnchor: 'start' }
              }}              
              tickFormat={(t) => (t*maxYaxisValueLine)}
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
  label: PropTypes.string.isRequired,
  label2: PropTypes.string
}

export default StackedBarChart;