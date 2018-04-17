import React from 'react'
import PropTypes from 'prop-types'
import {Chart, Line} from 'react-chartjs-2'
import ChartBox from '../components/ChartBox'
import MultiLineDefaultData from '../data/multiLineDefaultData'

class MultiLineChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scenarioValuesAllRegions : MultiLineDefaultData[this.props.type].scenarioValuesAllRegions,
      factor : MultiLineDefaultData[this.props.type].factor
    }
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    scenarioSelection: PropTypes.object.isRequired,
    UpdateWorldView: PropTypes.func.isRequired
  }

  UpdateData = (nextProps) => {
    let factorId = parseInt(this.state.factor.id, 10);

    let populationId = nextProps.scenarioSelection.populationSelection
    let affluenceId = nextProps.scenarioSelection.affluenceSelection
    let technologyId = nextProps.scenarioSelection.technologySelection
    let dietId = nextProps.scenarioSelection.dietSelection
    let scenarioIdentifier = populationId+'-'+affluenceId+'-'+technologyId+'-'+dietId+'.json'

    fetch('data/'+scenarioIdentifier).then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((data) => {
          this.setState({
            scenarioValuesAllRegions : data[factorId][factorId]['scenarioValuesAllRegions'],
            factor : data[factorId][factorId]['factor'] 
          })        
        });
      }
    ) 
  }

  componentDidMount () {
    this.UpdateData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    let currentPopulationId = this.props.scenarioSelection.populationSelection
    let currentAffluenceId = this.props.scenarioSelection.affluenceSelection
    let currentTechnologyId = this.props.scenarioSelection.technologySelection
    let currentDietId = this.props.scenarioSelection.dietSelection
    let populationId = nextProps.scenarioSelection.populationSelection
    let affluenceId = nextProps.scenarioSelection.affluenceSelection
    let technologyId = nextProps.scenarioSelection.technologySelection
    let dietId = nextProps.scenarioSelection.dietSelection    
    if(currentPopulationId !== populationId ||
      currentAffluenceId !== affluenceId ||
      currentTechnologyId !== technologyId ||
      currentDietId !== dietId) {
      this.UpdateData(nextProps)
    }
  }

  render() {
    let factorId = parseInt(this.state.factor.id, 10);
    
    let labelString = this.state.factor.unit;
    let labelStringShort = this.state.factor.unitShort;
    let decimals = 0;
    let title = this.state.factor.title ;
  
    switch(factorId) {
      case 2:
      case 5:
      case 6:
      case 8:
        decimals = 2;
        break;
      default:
        decimals = 0;
    }
  
    let datasets = [];
    let years = [];
    
    for (let i = 0; i < this.state.scenarioValuesAllRegions.length; i++) {
      var scenarioValue = this.state.scenarioValuesAllRegions[i];
      if(years.indexOf(scenarioValue.year)< 0) {
        years.push(scenarioValue.year);
      }
    }
  
    let data = {
      labels: years,
      datasets: datasets
    };
    let chartOptions = {
      title: {
        display: true,
        text: title,
        fontFamily: 'Roboto',
        fontSize: 14
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
            },
            scaleLabel: {
              display: true,
              labelString: labelString,
            },
          },
        ],
      },
      tooltips: {
        enabled: true,
        callbacks: {
          label: function(tooltipItems, data) {
            return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' ' + labelStringShort;
          }
        }
      },
      onHover: function(e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      },      
      onClick: (evt, elements) => {
        // To check if the header is clicked: evt.layerY<36
        //if(this.getElementAtEvent(evt)[0]) {
          this.props.UpdateWorldView('worldLink', this.props.type)
          this.props.UpdateWorldView('worldChartType', title)  
          //this.props.UpdateWorldView('worldYear', years[this.getElementAtEvent(evt)[0]._index])
          this.props.UpdateWorldView('worldYear', 2100)
        //}
      },
    };
  
    if(this.props.scenarioSelection.worldLink===this.state.factor.id) {
      let xAdjustment = 40
      if(this.props.scenarioSelection.worldYear<years[parseInt(years.length/2, 10)]) {
        xAdjustment = -40
      }    
      chartOptions['annotation'] = {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: this.props.scenarioSelection.worldYear,
            borderColor: "red",
            label: {
              content: "SELECTED",
              enabled: true,
              position: "top",
              xAdjust: xAdjustment
            }
          }
        ]
      }
    } else {
      chartOptions['annotation'] = {annotations: []}
    }
  
    Chart.defaults.global.legend.display = false;
  
    return (
      <ChartBox>
        <Line data={data} options={chartOptions} />
      </ChartBox>
    );
  };
}

export default MultiLineChart;