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
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
export default () => (
  <AboutContainer>
    <AboutHeader>Forudsætninger</AboutHeader>
    <AboutHeader2>Forudsætninger kort fortalt</AboutHeader2>
    <AboutBody>
      Her vil vi løbende beskrive de vigtigste forudsætninger anvendt i TIMES-DK modellen til de viste
      scenarier. Det er ikke en fuldendt beskrivelse og dokumentation, men den vil gradvist få tilføjet flere   
      og flere detaljer efterhånden som vi får det beskrevet.
    </AboutBody>
    <AboutBody>
      Modellen TIMES-DK er en energisystemmodel udviklet som en følge af energiaftalen i 2012. Den er 
      udviklet i et samarbejde mellem Energistyrelsen og DTU og bliver i dag brugt til bl.a. Energistyrelsens 
      årlige Basisfremskrivning. DTU’s udgave af TIMES-DK modellen adskiller sig fra Energistyrelsens på en 
      række punkter, men grundmodellen er den samme. I vores modellering af scenarier bruger vi mange af de 
      samme antagelser og forudsætninger som Energistyrelsen bruger i Basisfremskrivningen. DTU’s Basisscenario 
      kan dermed sammenlignes med Energistyrelsens.
    </AboutBody>
    <AboutHeader2>Brændselspriser</AboutHeader2>
    <AboutBody>
      Brændselspriserne, der anvendes i DTU’s TIMES-DK er baseret på Energistyrelses basisfremskrivning fra 2018.
    </AboutBody>
    <AboutBody>
      <img src="Fuelprice.png" width="752" height="452">
    </AboutBody>
    <AboutHeader2>Priser på biler</AboutHeader2>
    <AboutBody>
      Købsprisen for forbrugerne består i modellen af importprisen, registreringsafgift samt moms. Der er 
      naturligvis stor usikkerhed på disse fremtidige priser, men med de anvendte priser og eksisterende 
      afgiftssystem i Danmark, hælder det til en lille fordel til de eldrevne biler efter 2020.
    </AboutBody>
    <AboutBody>
      <img src="FutureCarPrice.png" width="752" height="452">
    </AboutBody> 
    <AboutBody>
      Købsprisen på hybridbiler forventes allerede at falde til under prisen af benzin og diesel biler i 2020, 
      som følge af afgiftsmæssige fordele. Frem mod 2030 forventes elbiler yderligere at falde og bliver dermed 
      den billigste bil type. De anvendte importpriser på biler i figuren svarer til en EU mellem klasse bil eller 
      en amerikansk kompakt model. Data er baseret på det amerikanske studie “ASSESSMENT OF VEHICLE SIZING, ENERGY 
      CONSUMPTION, AND COST THROUGH LARGE-SCALE SIMULATION OF ADVANCED VEHICLE TECHNOLOGIES” lavet af U.S. 
      Department of Energy (2016). 
    </AboutBody>
    <AboutBody>
      En optimeringsmodel som TIMES-DK kan have svært ved at fange forbrugerpræferencer, der ikke er økonomisk 
      rationelle såsom frygten for at løbe tør for strøm i en elbil eller loyalitet over for et bestemt bilmærke. 
      TIMES-DK vælger den billigste kombination af teknologier på tværs af alle sektorer og minimerer dermed de 
      samlede omkostninger i samfundet. Derfor vil modellen så hurtigt som muligt forsøge at skifte til el og 
      hybridbiler da de er billigst efter 2020. I den nærmeste fremtid antager vi derfor at der er nogle grænser 
      for hvor hurtigt vi vil skifte til el og hybridbiler. Salget af el og hybrid biler er begrænset til at kunne 
      udgøre maximalt 39 % i 2020 og stigende mod 50 % i 2030 – de 39 % svarer til gennemsnitssalget i Norge 2017 
      og de 50 % til salget i dag. Dette vurderes af DTU, som en relativ konservativ begrænsning når man kigger på 
      udmeldingerne fra bilproducenterne: 
    </AboutBody>
    <AboutBody>
      <table style=width:752>
      <caption>Tabel med bilproducenternes udmeldinger vedrørende fremtidige bilmodeller</caption>
        <tr>
          <th>Bilfirma</th>
          <th>Bilmodeller</th>
          <th>Målsætninger<th/>
        </tr>
        <tr>
          <td>Volkswagen Group</td>
          <td>50 EV, 30 PHEV og 220 Hybrid modeller i 2025 og alle modeller (300) findes i EV eller PHEV version i 2030</td>
          <td>25 % Af salg i 2025 er EV eller PHEV (2-3 millioner biler)</td>
        </tr>
        <tr>
          <td>PSA Group (Peugeot, Opel, Citroén)</td>
          <td>Alle bilmodeller i EV eller PHEV version i 2025</td>
          <td></td>
        </tr>
        <tr>
          <td>Volvo</td>
          <td>Alle nye moodeller er PHEV eller EV fra 2019</td>
          <td></td>
        </tr>
        <tr>
          <td>Ford</td>
          <td>16 EV og 24 PHEV i 2022 (udtalelsen blev ændret fra 2025 efter blot 6 måneder)</td>
          <td>70 % af salg til Kina vil være hybrid, PHEV eller EV i 2025</td>
        </tr>
        <tr>
          <td>Jaguar, Aston Martin og Land Rover</td>
          <td>Alle nye modeller er PHEV eller EV fra 2020</td>
          <td></td>
        </tr>
        <tr>
          <td>GM</td>
          <td>20 EV i 2023 og alle modeller er i EV eller PHEV i 2025</td>
          <td></td>
        </tr>
        <tr>
          <td>Hyundai</td>
          <td>14 EV i 2025 og 60 % af modellerne findes i el eller hybrid version i 2021</td>
          <td></td>
        </tr>
        <tr>
          <td>Toyota</td>
          <td>Alle modeller i el eller hybrid version i 2025</td>
          <td>salg af 5.5 milioner EV og PHEV i 2030, svare til over 50 % af alle solgte biler i 2017</td>
        </tr>
      </table>  
    </AboutBody>      
    <AboutHeader2>Diverse antagelser vedr. el- og varmesektoren</AboutHeader2>
    <AboutBody>
      Da TIMES-DK udelukkende modellerer Danmark og ikke de omkringliggende lande, så anvendes en 
      række eksogene antagelser om udviklingen i elpriser i omkringliggende lande, 
      transmissionsforbindelser osv. Disse rammebetingelser følger så vidt muligt Energistyrelsens 
      Basisfremskrivning. Det betyder bl.a. en maximal import/eksport af elektricitet på 22% af det 
      nationale el forbrug i 2030 og frem mod 2050 øges denne begrænsning til 60 %.
    </AboutBody>
    <AboutBody>
      Der er ikke modelleret nogen brændselsbinding i ikke modellen. Det er derfor muligt at skifte   
      fra kul i store centrale fjernvarme til både biomasse og varmepumper.
    </AboutBody>
    <AboutBody>
      Der er ikke tilslutningspligt til fjernvarme i modellen, så fjernvarme vil kun forblive og udvides 
      til områder hvor der samlet set er den billigste løsning. 
    </AboutBody>
    <AboutBody>
      Der bruges en general diskonteringsrente på 10 % i modellen for at simulere privat økonomisk 
      tankegang. Dog opererer fjernvarmeværker med en diskonteringsrente på 4 % for at simulere nulprofit 
      og mulighed for kommunelån.
    </AboutBody>
    <AboutHeader2>Potentiale for vedvarende energi i Danmark anvendt som grænser i modellen, herunder delt 
    i brændselsfri og biomasse potentialer.</AboutHeader2>
    <AboutBody>
      <table style=width:752>
      <caption>Brændselsfri VE potentialer</caption>
        <tr>
          <th>Teknologi</th>
          <th>MW kapacitet</th>
        </tr>
        <tr>
          <td>Landvind</td>
          <td>4400</td>
        </tr>
        <tr>
          <td>Havvind</td>
          <td>50000</td>
        </tr>
        <tr>
          <td>Husstands solceller</td>
          <td>9500</td>
        </tr>
        <tr>
          <td>Industriens tag solceller</td>
          <td>8100</td>
        </tr>
        <tr>
          <td>Landbaseret solceller</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>Bølge energi</td>
          <td>3175</td>
        </tr>
        <tr>
          <td>Solvarme</td>
          <td>7400</td>
        </tr>
        <tr>
          <td>Geotermi</td>
          <td>630</td>
        </tr>
      </table>
    </AboutBody>
    <AboutBody>
      Landvind er begrænset 4400 MW grundet de seneste års kritik af udbygning. El-produktion på 
      landvind er den billigste løsning og en øgning af potentialet betyder mere landvind og et billigere 
      system.
    </AboutBody>
    <AboutBody>
      <table style=width:752>
      <caption>Nationale biomasse potentialer</caption>
        <tr>
          <th>Energikilde</th>
          <th>PJ per år</th>
        </tr>
        <tr>
          <td>Affald</td>
          <td>32.6</td>
        </tr>
        <tr>
          <td>Træflis</td>
          <td>40</td>
        </tr>
        <tr>
          <td>Brænde</td>
          <td>24</td>
        </tr>
        <tr>
          <td>Energiroer</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Rapsfrø</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Træpiller</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Gylle</td>
          <td>13.8</td>
        </tr>
        <tr>
          <td>Halm</td>
          <td>68</td>
        </tr>
        <tr>
          <td>Græsarter</td>
          <td>6.7</td>
        </tr>
        <tr>
          <td>Energimajs</td>
          <td>3.6</td>
        </tr>
        <tr>
          <td>Totalt potentiale</td>
          <td>185.8</td>
        </tr>
      </table>      
    </AboutBody>
    <AboutBody>
      Den totale mænge nationale biomasse til rådighed svarer til ca. 185 PJ med de nuværende 
      ressourcer. Med udnyttelse af marginaljorde til produktion af energiafgrøder vil potentialet kunne 
      øge potentialet op mod 250 PJ biomasse. Ifølge studiet ”Carbon footprint of bioenergy pathways for 
      the future Danish energy system” er den bæredygtige biomasse ressource på 10-20 GJ/person/år, 
      svarende til 55-110 PJ biomasse forbrug i Danmark, altså mindre end det som anses som et realistisk 
      potentiale i dag. Modellen har mulighed for at importere biomasse fra internationale markeder og 
      dermed overstige de nationale ressourcer.
    </AboutBody>    
    <AboutBody><Link to='/'>Tilbage til forsiden</Link></AboutBody>
  </AboutContainer>
)
