import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  `
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1.5em;
  `}
  font-weight: bold;
  `
  AboutHeader.displayName = 'AboutHeader'

const AboutBody = styled.p`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const BodyLink = styled.a`
  color: inherit;
  text-decoration: underline;
  `

export default () => (
  <AboutContainer>
    <AboutHeader>Abonnér på opdateringer</AboutHeader>
    <AboutBody>
      <BodyLink href='https://visualping.io/?url=http://energiaftalen.tokni.com&mode=visual'>Modtag email via VisualPing når Energiaftalen opdateres.</BodyLink>
    </AboutBody>
    <AboutBody><Link to='/'>Tilbage til forsiden</Link></AboutBody>
  </AboutContainer>
)