import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScenarioDivider = styled.div`
  height: 18px;
`

const ScenarioHeader = styled.div`
  padding: 0 12px 5px 15px;
  margin: 0;
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  `
const ScenarioOption =styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  line-height: 26px;
  padding: 0 12px 0 15px;
  position: relative;
  width: 100%;
  border-radius: 0;
  background-color: ${props => (props.selected ? '#b50404' : 'inherit')};
  color: ${props => (props.selected ? 'white' : 'rgb(184,176,183)')};
  &:hover {
    cursor: pointer;
    background-color: ${props => (props.selected ? '#b50404' : '#555')};
    :after {
      content: '▶';
      position: absolute;
      left: 217px;
      color: ${props => (props.selected ? '#b50404' : '#555')};
      font-size: 1.5em;
    }
    > * {
      display: block;
      font-weight: ${props => (props.selected ? 'bold' : 'normal')};
    }
  }
`

const ScenarioDescription = styled.div`
  display: none;
  position: absolute;
  left: 238px;
  top: 0px;
  color: white;
  font-size: 0.8em;
  line-height: 1.4em;
  padding: 5px;
  background-color: #555;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

class ScenarioSelectionList extends React.Component {
  state = {
    value: this.props.selectedValue,
  }

  handleChange = (event, value) => {
    this.setState({ value })
    this.props.updateScenarioSelection(event, this.props.name, value)
  }

  render() {
    const { dimensionOptions, dimensionTitle } = this.props
    let stringValue=this.state.value.toString();
    let scenarioOptions = dimensionOptions.map(option =>
      {
        let optionValue=option.id.toString()
        return(
          <ScenarioOption
            key={option.id}
            value={optionValue}
            selected={optionValue===stringValue}
            onClick={(event) => this.handleChange(event, optionValue)}
          >
            {option.short_description}
            <ScenarioDescription>
              {option.long_description}
            </ScenarioDescription>                 
          </ScenarioOption>

        )
      })
    return (
      <div style={{display:'flex', flexWrap: 'wrap'}}>
        <ScenarioDivider/>
        <ScenarioHeader>{dimensionTitle}</ScenarioHeader>
          {scenarioOptions}
      </div>
    )
  }
}

ScenarioSelectionList.propTypes = {
  updateScenarioSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.any.isRequired,
  dimensionOptions: PropTypes.array.isRequired,
  dimensionTitle: PropTypes.string.isRequired,
}

export default ScenarioSelectionList;