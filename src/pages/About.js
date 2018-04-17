import React from 'react'
import AboutContainer from '../components/AboutContainer'
import AboutHeader from '../components/AboutHeader'
import AboutHeader2 from '../components/AboutHeader2'
import AboutBody from '../components/AboutBody'
import BodyLink from '../components/BodyLink'
import { Link } from 'react-router-dom'

export default () => (
  <AboutContainer>
    <AboutHeader>Om Energiaftalen</AboutHeader>
    <AboutHeader2>Disclaimer</AboutHeader2>
    <AboutBody>The Danish Energy Agreement tool is meant to give an illustrative visualization of the impact of different enery scenarios in Denmark.</AboutBody>
    <AboutBody>The model contains a simplified representation of the energy system and of the drivers causing energy demand and supply.</AboutBody>
    <AboutHeader2>Development</AboutHeader2>
    <AboutBody>The tool has been developed at <BodyLink href='http://www.sys.man.dtu.dk/'>System Analysis at the Department of Management Engineering at the Technical University of Denmark</BodyLink>.</AboutBody>
    <AboutBody>The online version of the tool is being developed by the software company <BodyLink href='http://www.tokni.com'>Tokni</BodyLink>.</AboutBody>
    <AboutBody><Link to='/'>Back to the main page</Link></AboutBody>
  </AboutContainer>
)