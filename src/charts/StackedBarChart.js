import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VictoryChart, VictoryLabel, VictoryLegend, VictoryGroup, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar, VictoryLine, VictoryTooltip } from 'victory';
import stackedBar from '../data/stackedBar';
import line from '../data/line';

const ChartHeader = styled(VictoryLabel) `
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  `;
  ChartHeader.displayName = 'ChartHeader';

class StackedBarChart extends React.Component {
  render() {
    const scenario = this.props.selectedScenario;
    const scenario2 = this.props.selectedScenario2;
    const chartName = this.props.chartName;
    const chartTitle = this.props.chartTitle;
    const combinedChart = this.props.combinedChart;
    const periods = [2015, 2020, 2025, 2030, 2035, 2040, 2045, 2050];
    let gutter, rowGutter;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      gutter=0;
      rowGutter=0;
    } else {
      gutter=-40;
      rowGutter=-5;
    }

    let maxY2 = 1;
    let minY2 = 0;
    if (combinedChart === true) {
      maxY2 = this.props.maxY2;
      minY2 = this.props.minY2;
    }

    let yDomain = [0, 1];
    if (this.props.minY < 0 || minY2 < 0) {
      let stackedRatio = this.props.minY / this.props.maxY;
      let lineRatio = minY2 / maxY2;
      yDomain = stackedRatio < lineRatio ? [stackedRatio, 1] : [lineRatio, 1];
    }

    const colors = [
      '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', 
      '#f032e6', '#bcf60c', '#008080', '#e6beff', '#9a6324', '#fffac8', 
      '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#fabebe', '#e6194b', '#3cb44b'
    ];

    const colors2 = [
      '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', 
      '#f032e6', '#bcf60c', '#008080', '#e6beff', '#9a6324', '#fffac8', 
      '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#fabebe', '#e6194b', '#3cb44b'
    ];

    return (
      <div>
        <VictoryChart
          domainPadding={20}
          width={380}
          height={380}
          padding={{ left: 80, right: 50, top: 50, bottom: 50 }}
          theme={VictoryTheme.material}
          domain={{ y: yDomain }}
        >
          <ChartHeader x={90} y={24}
            text={chartTitle}
          />
          <VictoryAxis
            key={0}
            tickValues={periods}
            tickFormat={periods}
          />
          <VictoryAxis
            dependentAxis
            axisLabelComponent={<VictoryLabel dx={120} />}
            key={2}
            offsetX={80}
            tickFormat={(t) => (t * this.props.maxY / this.props.divideValues)}
            tickValues={[0, 0.25, 0.5, 0.75]}
            label={this.props.label}
          />
          {combinedChart === true &&
            <VictoryAxis
              dependentAxis
              key={3}
              offsetX={330}
              label={this.props.label2}
              style={{
                axis: { stroke: 'gray' },
                axisLabel: { fill: 'gray', padding: -50 },
                ticks: { padding: -25 },
                tickLabels: { fill: 'gray', textAnchor: 'start' }
              }}
              tickFormat={(t) => `${this.props.Y2Percentage === false ? (t * maxY2) : (t * maxY2 * 100) + '%'}`}
              tickValues={[0, 0.25, 0.5, 0.75, 1.0]}
            />
          }
          <VictoryLegend x={90} y={50}
            orientation="horizontal"
            gutter={gutter}
            rowGutter={rowGutter}
            symbolSpacer={4}
            itemsPerRow={3}
            style={{
              title: { fontSize: 14, leftPadding: -10 }
            }}
            colorScale={colors}
            data={stackedBar.data.scenarios.find(o => o.scenario === scenario).indicators.find(o => o.indicator === chartName).indicatorGroups.map(
              (chartGroup, i) => (
                { name: chartGroup.indicatorGroup.concat("        ").substr(0, 16), fill: colors[i] }
              )
            )}
            labelComponent={<VictoryLabel style={{ fontSize: '9px' }} />}
          />
          <VictoryGroup offset={10} style={{ data: { width: 10 } }}>
            <VictoryStack>
              {
                stackedBar.data.scenarios.find(o => o.scenario === scenario).indicators.find(o => o.indicator === chartName).indicatorGroups.map(
                  (chartGroup, i) => (
                    <VictoryBar
                      key={chartGroup.indicatorGroup}
                      data={chartGroup.indicatorGroupValues.map(
                        chartGroupValue => (
                          {
                            ...chartGroupValue,
                            label: scenario + ': ' + chartGroup.indicatorGroup + ': ' +
                              (chartGroupValue.total / this.props.divideValues).toFixed(2)
                          }
                        )
                      )}
                      x='year'
                      y={(datum) => datum['total'] / this.props.maxY}
                      labelComponent={<VictoryTooltip />}
                      style={{
                        data: { fill: colors[i] }
                      }}
                    />
                  )
                )
              }
            </VictoryStack>
            {scenario2 !== "" &&
              <VictoryStack>
                {
                  stackedBar.data.scenarios.find(o => o.scenario === scenario2).indicators.find(o => o.indicator === chartName).indicatorGroups.map(
                    (chartGroup, i) => (
                      <VictoryBar
                        key={chartGroup.indicatorGroup}
                        data={chartGroup.indicatorGroupValues.map(
                          chartGroupValue => (
                            {
                              ...chartGroupValue,
                              label: scenario2 + ': ' + chartGroup.indicatorGroup +
                                ': ' + (chartGroupValue.total / this.props.divideValues).toFixed(2)
                            }
                          )
                        )}
                        x='year'
                        y={(datum) => datum['total'] / this.props.maxY}
                        labelComponent={<VictoryTooltip />}
                        style={{
                          data: { fill: colors2[i] }
                        }}
                      />
                    )
                  )
                }
              </VictoryStack>
            }
          </VictoryGroup>
          {(combinedChart === true) &&
            <VictoryGroup>
              <VictoryLine
                data={
                  line.data.scenarios.find(o => o.scenario === scenario).indicators.find(o => o.indicator === chartName).indicatorGroups[0].indicatorGroupValues.map(
                    entry => (
                      {
                        ...entry,
                        label: `${this.props.Y2Percentage === false ? (entry.total).toFixed(0) : (entry.total * 100).toFixed(0) + '%'}`
                      }
                    )
                  )
                }
                x='year'
                style={{ data: { stroke: 'red' }, labels: { fontSize: '8px' } }}
                y={(datum) => datum['total'] / maxY2}
                animate={{ duration: 500 }}
                labelComponent={<VictoryLabel dy={7} />}
              />
              {scenario2 !== "" &&
                <VictoryLine
                  data={
                    line.data.scenarios.find(o => o.scenario === scenario2).indicators.find(o => o.indicator === chartName).indicatorGroups[0].indicatorGroupValues.map(
                      entry => (
                        {
                          ...entry,
                          label: `${this.props.Y2Percentage === false ? (entry.total).toFixed(0) : (entry.total * 100).toFixed(0) + '%'}`
                        }
                      )
                    )
                  }
                  x='year'
                  style={{ data: { stroke: 'green' }, labels: { fontSize: '8px' } }}
                  y={(datum) => datum['total'] / maxY2}
                  animate={{ duration: 500 }}
                  labelComponent={<VictoryLabel dy={7} />}
                />
              }
            </VictoryGroup>
          }
        </VictoryChart>
      </div>
    )
  }
}

StackedBarChart.defaultProps = {
  divideValues: 1,
  selectedScenario2: ""
}

StackedBarChart.propTypes = {
  selectedScenario: PropTypes.string.isRequired,
  selectedScenario2: PropTypes.string,
  chartName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string.isRequired,
  combinedChart: PropTypes.bool.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  minY2: PropTypes.number,
  maxY2: PropTypes.number,
  label: PropTypes.string.isRequired,
  divideValues: PropTypes.number,
  label2: PropTypes.string,
  Y2Percentage: PropTypes.bool
}

export default StackedBarChart;