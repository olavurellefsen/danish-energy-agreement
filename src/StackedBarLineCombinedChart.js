import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {VictoryChart, VictoryLabel, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar, VictoryLine, VictoryTooltip} from 'victory';
import scenarios from './data/scenarios.1';

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
`;

class StackedBarLineCombinedChart extends React.Component {
  render() {
    const scenario = this.props.selectedScenario;
    const chartType = this.props.chartType;
    const data = scenarios.scenarios[scenario][chartType];

    const maxima = [40000,100]

    const xOffsets = [50, 350];
    const tickPadding = [ 0, -25 ];
    const anchors = ["end", "start"];
    const colors = ["black", "red"];

    return (
      <div>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          width={400} height={400}
          domain={{ y: [0, 1] }}
        >
          <ChartHeader x={50} y={24}
            text={chartType}
          />
          <VictoryAxis />
          {data.map((d, i) => (
            <VictoryAxis dependentAxis
              key={i}
              offsetX={xOffsets[i]}
              style={{
                axis: { stroke: colors[i] },
                ticks: { padding: tickPadding[i] },
                tickLabels: { fill: colors[i], textAnchor: anchors[i] }
              }}
              tickValues={[0.25, 0.5, 0.75, 1]}
              tickFormat={(t) => (t * maxima[i]).toFixed(0)}
            />
          ))}
          {data.map((d, i) => {
            if(i===0) {
              return(
                <VictoryStack key={i}>
                {              
                  d.map(
                    chartGroup => (
                      <VictoryBar 
                        key={chartGroup.group}
                        data={chartGroup.values.map(
                          chartGroupValue => (
                            {...chartGroupValue, label: chartGroup.group + ': ' + chartGroupValue.total.toFixed(2) }
                          )
                        )}
                        x='period'
                        y={(datum) => datum['total'] / maxima[i]}
                        labelComponent={<VictoryTooltip/>}
                      />
                    )
                  )
                }
                </VictoryStack>
              )
            } else {
              return(
                <VictoryLine
                  key={i}
                  data={d[0].values}
                  x='period'
                  style={{ data: { stroke: colors[i] } }}
                  y={(datum) => 100*datum['total'] / maxima[i]}
                />
              )              
            }
          })}
        </VictoryChart>
      </div>
    );
  }
}

StackedBarLineCombinedChart.propTypes = {
  selectedScenario: PropTypes.number.isRequired,
  chartType: PropTypes.string.isRequired
}

export default StackedBarLineCombinedChart;