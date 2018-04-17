import { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
query MultiLinesQuery($factorId:ID!, $populationId: ID!, $affluenceId: ID!, $technologyId: ID!, $dietId: ID!) {
  scenarioValuesAllRegions(factorId: $factorId, populationId: $populationId, affluenceId: $affluenceId, technlogyId: $technologyId, dietId: $dietId) {
    regionId
    year
    scenarioValue
  },
  factor(id: $factorId) {
    id
    unit
    unitShort
    title
  }
}
`;

const options = (props) => ({ variables: {
  populationId: props.scenarioSelection.populationSelection,
  affluenceId: props.scenarioSelection.affluenceSelection,
  technologyId: props.scenarioSelection.technologySelection,
  dietId: props.scenarioSelection.dietSelection,
  factorId: props.type,
}});

class MultiLinesQuery extends Component {
  render() {
    return this.props.children(this.props.data);
  }
}

MultiLinesQuery.propTypes = {
  populationId: PropTypes.number,
  affluenceId: PropTypes.number,
  technologyId: PropTypes.number,
  dietId: PropTypes.number,
  factorId: PropTypes.number,
  children: PropTypes.func,
  data: PropTypes.object
}

export default graphql(Query, {options: options})(MultiLinesQuery);
