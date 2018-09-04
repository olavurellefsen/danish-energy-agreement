import React from 'react';
import StackedBarChart from './StackedBarChart';

it('renders the chart title', () => {
  const selectedScenario = "DTU_Regeringen";
  const chartName = "_CO2 emissioner";
  const chartTitle = "Dummy Title";
  const combinedChart = false;
  const minY = 0;
  const maxY = 1;
  const label = "Dummy Label";

  const wrapper = shallow(<StackedBarChart
    selectedScenario={selectedScenario}
    chartName={chartName}
    chartTitle={chartTitle}
    combinedChart={combinedChart}
    minY={minY}
    maxY={maxY}
    label={label}
  />);

  expect(wrapper.find('VictoryChart')).toHaveLength(1);
});

