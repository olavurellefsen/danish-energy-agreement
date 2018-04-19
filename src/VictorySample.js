import React from 'react';
import {VictoryChart, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar} from 'victory';
import scenario0 from './data/scenario0';

const data = scenario0.scenarios;
    
export default class LineChart extends React.Component {
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
            tickFormat={(x) => (`${x / 1}`)}
          />
          <VictoryStack>
            <VictoryBar data={data[0].CO2emissions["Affald CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Bio CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["El og varme sektorens CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Husholdningers CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Industriel CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Konveteringssektorens CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Land transport CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Luftfart CO2"]} x="Period" y="Total" />
            <VictoryBar data={data[0].CO2emissions["Søfart CO2"]} x="Period" y="Total" />
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }
}