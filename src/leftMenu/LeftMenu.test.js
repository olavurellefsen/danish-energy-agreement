import React from 'react';
import LeftMenu from './LeftMenu';

it('renders the menu', () => {
  const scenarioSelection = {
    scenarioSelection: "DTU_Regeringen",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false
  };
  const wrapper = shallow(<LeftMenu
    updateScenarioSelection={() => (false)}
    scenarioSelection={scenarioSelection}
    scenarioCombinations={{scenarioOptions: []}}
    toggleDifference={() => (false)}
  />);
  expect(wrapper.find('MenuLayout')).toHaveLength(1);
});