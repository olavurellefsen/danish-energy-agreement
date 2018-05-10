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
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutList = styled.ul`
font-size: 1em;
${breakpoint('mobile','desktop')`
  font-size: 0.7em;
`}  
`

export default () => (
  <AboutContainer>
    <AboutHeader>Scenariebeskrivelser</AboutHeader>
    <AboutHeader2>DTU Frozen Policy scenario</AboutHeader2>
    <AboutBody>
      Er et frozen policy scenario i stil med Energistyrelsens basisfremskrivning. 
      Det indeholder alle allerede besluttede politikker samt samme brændselspriser 
      som anvendes af Energistyrelsen. Dvs. et energiscenarie med fastlåst politik 
      frem til 2050. Det antages, at der udpeges områder til udbygning af havvindmøller 
      i både øst og vest Danmark, samt at udbuddet af EL og Hybrid biler i 2025 er 
      på niveau med i dagens udbud af benzin biler – dette kræver formentlig en 
      klar udmelding fra regeringen om at de ser elbiler som den fremtidige 
      løsning i Danmark, ellers vil bil-producenterne sandsynligvis ikke bringe 
      nok el- og hybridbiler på markedet i Danmark. Der i modellen taget højde 
      for omkostninger til udbygning af infrastruktur til el- og gasbiler og 
      modellen bygger automatisk denne infrastruktur og dermed er det implicit 
      antaget at der er politisk opbakning til en sådan udbygning. 
    </AboutBody>
    <AboutBody>
      Der er i modellen antaget en maksimal udbygning af 4400 MW landvind, 50000 MW havvind,
      3000 MW bølgeenergi, 12000 MW tag solceller og 3000 MW mark solcelleanlæg -  det sidste
      svarende til et areal på ca. halvdelen af Langeland. 
    </AboutBody>
    <AboutBody>
      De følgende scenarier bygger alle oven på DTU Basis scenario: 
    </AboutBody>    
    <AboutHeader2>DTU International skibsfart scenario</AboutHeader2>
    <AboutBody>
      Scenariet inkluderer international bunkering fra shipping industrien,
      foruden de samme antagelser som i Basis scenariet. Dvs. det inkluderer
      den danske del af den internationale skibstrafik og tilhørende
      energiforbrug og emissioner.
    </AboutBody>
    <AboutHeader2>DTU Fossilfri 2050</AboutHeader2>
    <AboutBody>
      Her er modellen bundet til at udledning af CO2 fra fossile brændsler skal
      være nul i 2050 undtagen den del, som kommer fra affaldsforbrænding.
    </AboutBody>
    <AboutHeader2>DTU Fossilfri 2040</AboutHeader2>
    <AboutBody>
      Her er modellen bundet til at udledning af CO2 fra fossile brændsler skal
      være nul i 2040 undtagen den del, som kommer fra affaldsforbrænding.
    </AboutBody>        
    <AboutHeader2>Regeringens forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>-	Mindst 50 % VE andel i 2030</li>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>Ingen kul i elforsyningen fra 2030</li> 
      <li>800 MW vindmøllepark implementeret i 2025</li> 
      <li>Reduktion af elvarme afgiften med 25 øre/kWh</li> 
      <li>Reduktion af elafgiften med 30 øre/kWh</li> 
      <li>0.5 mia. kr i årlig reserve efter 2025 for at nå målsætningen (her modelleret som 1400 MW havvindmøller)</li> 
      <li>10 øre/kWh støtte til sol og landvind til 2025</li> 
      <li>Forlængelse af biomassestøtten for eksisterende anlæg til 2030.</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen: 
    </AboutBody>
    <AboutList>
      <li>Støtteordning til industri og husholdningers energibesparelser</li>
      <li>Reduktion af elafgift til liberale erhverv</li>
    </AboutList>    
    <AboutHeader2>Radikale Venstre's forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>Mindst 50 % VE andel i 2030</li>
      <li>60 % VE i 2030</li>
      <li>16 % effektivisering i 2030</li>
      <li>80 % varmepumper i decentrale fjernvarme områder og væsentlig dele af centrale områder</li>
      <li>Fossilfri el og varme sektor i 2030</li>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>Fossilt forbud i el og varme sektoren fra 2030</li>
      <li>6000 MW VE</li>
      <AboutList> 
        <li>3000 MW havvind bygget i 2024, 2026 og 2028</li>
        <li>300 MW årlig udbygning af sol og landvind</li>
      </AboutList>
      <li>Elafgift til opvarmning sænkes med 25 øre/kWh</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen:
    </AboutBody>
    <AboutList>
      <li>10 øre/kWh minimums pris på el</li>
      <li>Afgift på biomasse til varmeanlæg med over 700 fuldlasttimer</li>
      <li>Støtte til biogas</li>
    </AboutList>
    <AboutHeader2>Alternativets forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>Fossilfrit Danmark i 2035</li>
      <li>Energieffektivisering i bygninger på 40 procent i 2030</li>
      <li>Reduktion af drivhusgasudledninger</li>
      <AboutList>
        <li>Mindst 60 % i 2025</li>
        <li>Mindst 80 % i 2030</li>
        <li>Mindst 95 % i 2035</li>
        <li>Mindst 100 % i 2040</li>
      </AboutList>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>10.000 MW VE udbygning mod 2030</li>
      <AboutList> 
        <li>5000 MW havvindmøller</li>
        <li>5000 MW landvind og solceller</li>
      </AboutList>
      <li>1 generations biobrændsler udfases fra 2025</li>
      <li>Minimum CO2 kvote pris på 40 Euro og 100 Euro i henholdsvis 2025 og 2030</li>
      <li>Elafgift til opvarmning sænkes med 20 øre/kWh</li>
      <li>Elafgift til varmepumper med brug af overskudsvarme sænkes til proces afgiften på 4 kr./GJ</li>
      <li>Udfasning af kul i 2028</li>
      <li>Genindføring af PSO afgiften</li>
      <li>Nul afgift på el og brint biler</li>
      <li>Nul salg af benzin og diesel fra 2025</li>
      <li>Ingen elafgift til transport indtil 2023</li>
      <li>Hævning af fradragsgrænsen for registreringsafgifts reduktion til 25.2 og 28.1 km/l for henholdsvis benzin og diesel biler.</li>
      <li>Afgiftsstigning for biler under fradragsgrænsen til 6000 kr.</li>
      <li>Offentlig transport fossilfri i 2025</li>
      <li>Stigning af benzin og diesel afgifter til 6 og 4.32 kr/l</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen:
    </AboutBody>
    <AboutList>
      <li>Støtte på 50 mio. kr til bølgeenergi</li>
      <li>Netto måleordning til solceller med net ydelse på 12 øre/kWh</li>
      <li>Den faste biomasse (til el og varme) skal Maks fylde 10-20 procent i 2030</li>
      <li>Afgift på fast biomasse i fjernvarmeanlæg og private ovne</li>
      <li>En milliard til implementering af varmepumper</li>
      <li>Ingen parkeringsafgifter og pris for at køre over Storebælt for elbiler</li>
      <li>Støtte til cykelstier på 200 mio. kr årligt</li>
      <li>Tillempelse af den tysk miljø ordning for lastbiler, men med dækning af alle veje</li>
      <li>Klimaafgift på flyrejser 80 kr./flyvning</li>
      <li>El-indenrigsfly i 2040</li>
      <li>Minimum 1.5 mia. til forskning</li>
    </AboutList>    
    <AboutBody>
      <Link to='/'>Tilbage til forsiden</Link>
    </AboutBody>
  </AboutContainer>
)