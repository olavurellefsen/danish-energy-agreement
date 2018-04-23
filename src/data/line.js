export default {
  scenarios: [
    {
      scenario: 0,
      "CO2 emissioner og VE andel": [
        { group: "Vedvarende Energi Andel", values: [{ period: "2015", total: 0.270103413764373 }, { period: "2020", total: 0.36207189295953 }, { period: "2025", total: 0.399336085976024 }, { period: "2030", total: 0.463672788599691 }, { period: "2035", total: 0.578847387373942 }, { period: "2040", total: 0.718428153802237 }, { period: "2045", total: 0.780990393796821 }, { period: "2050", total: 0.815407676265559 }] }
      ],
      "El netto eksport": [
        { group: "Net eksport", values: [{ period: "2015", total: -4.5150681365525 }, { period: "2020", total: 18.0175513853284 }, { period: "2025", total: -26.1072661403925 }, { period: "2030", total: -47.6659252748637 }, { period: "2035", total: -78.2532095786111 }, { period: "2040", total: -40.751336760388 }, { period: "2045", total: 44.7410068199936 }, { period: "2050", total: 120.150347987773 }] }
      ]
    },
    {
      scenario: 1,
      "CO2 emissioner og VE andel": [
        { group: "Vedvarende Energi Andel", values: [{ period: "2015", total: 0.280103413874383 }, { period: "2020", total: 0.37208199295953 }, { period: "2025", total: 0.399337095987024 }, { period: "2030", total: 0.473782899599791 }, { period: "2035", total: 0.589948398383942 }, { period: "2040", total: 0.819429153902238 }, { period: "2045", total: 0.890990393897921 }, { period: "2050", total: 0.915408787275559 }] }
      ],
      "El netto eksport": [
        { group: "Net eksport", values: [{ period: "2015", total: -5.5150681365525 }, { period: "2020", total: 13.0175513853284 }, { period: "2025", total: -23.1072661403925 }, { period: "2030", total: -47.6659252748637 }, { period: "2035", total: -98.2532095786111 }, { period: "2040", total: -30.751336760388 }, { period: "2045", total: 34.7410068199936 }, { period: "2050", total: 130.150347987773 }] }
      ]
    }
  ]
}