import React from 'react'
import PropTypes from 'prop-types'
import ScenarioSelectionList from './scenarioSelection/ScenarioSelectionList'
import MenuLayout from './components/MenuLayout'
import MenuHeader from './components/MenuHeader'
import MenuHeaderLeft from './components/MenuHeaderLeft'
import MenuHeaderRight from './components/MenuHeaderRight'
import AppLogo from './components/AppLogo'
import MenuTitle from './components/MenuTitle'
import MenuSeparatorLine from './components/MenuSeparatorLine'
import MenuRoutes from './components/MenuRoutes'
import MenuItem from './components/MenuItem'
import ScenarioSelection from './components/ScenarioSelection'
import MenuFooter from './components/MenuFooter'
import CopyrightNotice from './components/CopyrightNotice'
import ExternalLink from './components/ExternalLink'

class ScenarioSelectionMenu extends React.Component {

  render() {
    return (
      <MenuLayout showMobileMenu={this.props.showMobileMenu}>
        <MenuHeader>
          <MenuHeaderLeft>
            <MenuTitle to='/'>
              Energi-
              aftalen
            </MenuTitle>
            <MenuRoutes>
              <MenuItem to='/about'>Om værktøjet</MenuItem>
            </MenuRoutes>
          </MenuHeaderLeft>
          <MenuHeaderRight>
            <AppLogo src='./images/dtulogo_white.png' alt='logo'/>
          </MenuHeaderRight>
        </MenuHeader>
        <MenuSeparatorLine />        
        <ScenarioSelection>
          <ScenarioSelectionList
            updateScenarioSelection={this.props.updateScenarioSelection}
            name='scenarioSelection'
            selectedValue={this.props.scenarioSelection.scenarioSelection}
            dimensionOptions={this.props.scenarioCombinations.scenarioOptions}
            dimensionTitle='Scenarier'
          />
        </ScenarioSelection>
        <MenuSeparatorLine />        
        <MenuFooter>
          <CopyrightNotice>
            <ExternalLink href='http://www.tokni.com'>Online version fra Tokni</ExternalLink>
          </CopyrightNotice>
        </MenuFooter>
      </MenuLayout>
    );
  }
}

ScenarioSelectionMenu.propTypes = {
  updateScenarioSelection: PropTypes.func.isRequired,
  scenarioSelection: PropTypes.object.isRequired,
  scenarioCombinations: PropTypes.object.isRequired,
  showMobileMenu: PropTypes.bool.isRequired
}

export default ScenarioSelectionMenu;