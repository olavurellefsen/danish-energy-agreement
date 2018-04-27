import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, withRouter, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import LeftMenu from './LeftMenu'
import LeftMenuMobile from './LeftMenu.mobile'
import Charts from './Charts'
import About from './pages/About'
import ScenarioDescriptions from './pages/ScenarioDescriptions'
import scenarioCombinations from './data/scenarioCombinations'

ReactGA.initialize('UA-117950963-1');
ReactGA.pageview(window.location.pathname + window.location.search);
const Page = styled.div`
    height: 100%;
    margin: 0px; 
    display: flex;
    box-sizing: border-box;
`
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Content = styled.div` 
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
  overflow-x: hidden;
`
const MainSwitch = styled(Switch)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarioSelection: 3,
      mobileOpen: false,
      showWelcome: true,
      showMobileMenu: false
    }
    this.scenarioCombinations = scenarioCombinations.scenarioCombinations
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  UpdateScenarioSelection = (e, name, value) => {
    e.preventDefault()
    this.setState({
      [name]: Number(value),
    })
    this.props.history.push('/')
    this.setState({
      showMobileMenu: false
    })
  }

  render() { 
    return (
        <Page>
          <Column>
            <Content>
              <LeftMenu 
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                showMobileMenu={this.state.showMobileMenu}
              />
              <LeftMenuMobile
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                showMobileMenu={this.state.showMobileMenu}
              />
            </Content>
          </Column>
          <Column>
            <Content>
              <MainSwitch>
                <Route exact path='/' render={()=><Charts 
                  scenarioSelection={this.state}
                  closeWelcome={this.UpdateScenarioSelection}
                />}/>
                <Route path='/about' component={About} />
                <Route path='/beskrivelser' component={ScenarioDescriptions} />
              </MainSwitch>
            </Content>
          </Column>
        </Page>
    );
  }
}

export default withRouter(App)