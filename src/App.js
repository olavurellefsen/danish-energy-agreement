import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Route, withRouter, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import LeftMenu from './LeftMenu'
import Charts from './Charts'
import About from './pages/About'
import ScenarioDescriptions from './pages/ScenarioDescriptions'
import scenarioCombinations from './data/scenarioCombinations'
import HamburgerIcon from './utils/HamburgerIcon'

ReactGA.initialize('UA-117950963-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const MainSwitch = styled(Switch)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
`

const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: ${props => (props.direction==='column' ? 'column' : 'row')};
`

const MobileHeaderMenu = styled.div`
  display: none;
  ${breakpoint('mobile','tablet')`
    color: white;
    background: rgb(50, 50, 50);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `}
`

const HamburgerWrapper = styled.div`
  padding: 10px;
`

const MobileHeaderItem = styled.div`
  font-weight: bold;
  font-size: 1.25em;
  padding: 10px;
  margin: 0;
  height: 26px;
  align-items: center;
  color: white;
  text-decoration: none;
`

const MobileLogo = styled.img`
  width: 30px;
  height: 44px;
  margin: 10px;
  border: 0;
`;

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
      <Flex direction='column'>
        <MobileHeaderMenu>
          <HamburgerWrapper onClick={() => {this.setState({showMobileMenu: !this.state.showMobileMenu})}}>
            <HamburgerIcon />
          </HamburgerWrapper>
          <MobileHeaderItem to='/'>
            Energiaftalen
          </MobileHeaderItem>
          <MobileLogo src='./images/dtulogo_white.png' alt='logo'/>            
        </MobileHeaderMenu>
        <Flex direction='row'>
          <LeftMenu 
            scenarioSelection={this.state}
            scenarioCombinations={this.scenarioCombinations}
            updateScenarioSelection={this.UpdateScenarioSelection}
            showMobileMenu={this.state.showMobileMenu}
          />
          <MainSwitch>
            <Route exact path='/' render={()=><Charts 
              scenarioSelection={this.state}
              closeWelcome={this.UpdateScenarioSelection}
            />}/>
            <Route path='/about' component={About} />
            <Route path='/beskrivelser' component={ScenarioDescriptions} />
          </MainSwitch>
        </Flex>
      </Flex>
    );
  }
}

export default withRouter(App)