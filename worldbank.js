var countries = [
  {
    "Country": "Argentina",
    "CountryCode": "AR",
    "Type": "Rosé",
    "Count": 1,
    "Price": 11.99,
    "Rating": 3.7
  },
  {
    "Country": "Argentina",
    "CountryCode": "AR2",
    "Type": "Red Wine",
    "Count": 65,
    "Price": 21.22,
    "Rating": 3.94
  },
  {
    "Country": "Argentina",
    "CountryCode": "AR3",
    "Type": "Champagne",
    "Count": 3,
    "Price": 16.32,
    "Rating": 3.53
  },
  {
    "Country": "Argentina",
    "CountryCode": "AR4",
    "Type": "White Wine",
    "Count": 6,
    "Price": 16.99,
    "Rating": 3.87
  },
  {
    "Country": "Australia",
    "CountryCode": "AU",
    "Type": "Red Wine",
    "Count": 47,
    "Price": 42.78,
    "Rating": 4.04
  },
  {
    "Country": "Australia",
    "CountryCode": "AU2",
    "Type": "White Wine",
    "Count": 8,
    "Price": 44.21,
    "Rating": 3.81
  },
  {
    "Country": "Central Coast",
    "CountryCode": "CC",
    "Type": "Red Wine",
    "Count": 18,
    "Price": 32.17,
    "Rating": 4.05
  },
  {
    "Country": "Central Coast",
    "CountryCode": "CC2",
    "Type": "White Wine",
    "Count": 6,
    "Price": 18.32,
    "Rating": 4.13
  },
  {
    "Country": "Austria",
    "CountryCode": "AT",
    "Type": "White Wine",
    "Count": 1,
    "Price": 14.99,
    "Rating": 4
  },
  {
    "Country": "Chile",
    "CountryCode": "CL",
    "Type": "Red Wine",
    "Count": 34,
    "Price": 28.84,
    "Rating": 3.98
  },
  {
    "Country": "Chile",
    "CountryCode": "CL2",
    "Type": "White Wine",
    "Count": 6,
    "Price": 16.66,
    "Rating": 3.7
  },
  {
    "Country": "France",
    "CountryCode": "FRA",
    "Type": "Rosé",
    "Count": 27,
    "Price": 16.58,
    "Rating": 4.11
  },
  {
    "Country": "France",
    "CountryCode": "FRA2",
    "Type": "Red Wine",
    "Count": 194,
    "Price": 87.5,
    "Rating": 3.99
  },
  {
    "Country": "France",
    "CountryCode": "FRA3",
    "Type": "Champagne",
    "Count": 133,
    "Price": 75.26,
    "Rating": 4.32
  },
  {
    "Country": "France",
    "CountryCode": "FRA4",
    "Type": "White Wine",
    "Count": 41,
    "Price": 23.14,
    "Rating": 3.9
  },
  {
    "Country": "Germany",
    "CountryCode": "DE",
    "Type": "White Wine",
    "Count": 10,
    "Price": 18.89,
    "Rating": 4.13
  },
  {
    "Country": "Greece",
    "CountryCode": "GR",
    "Type": "Red Wine",
    "Count": 2,
    "Price": 27.49,
    "Rating": 4.6
  },
  {
    "Country": "Greece",
    "CountryCode": "GR2",
    "Type": "White Wine",
    "Count": 2,
    "Price": 17.49,
    "Rating": 3.35
  },
  {
    "Country": "Italy",
    "CountryCode": "IT",
    "Type": "Rosé",
    "Count": 2,
    "Price": 14.99,
    "Rating": 4
  },
  {
    "Country": "Italy",
    "CountryCode": "IT2",
    "Type": "Red Wine",
    "Count": 198,
    "Price": 39.5,
    "Rating": 4.06
  },
  {
    "Country": "Italy",
    "CountryCode": "IT3",
    "Type": "Champagne",
    "Count": 70,
    "Price": 16.12,
    "Rating": 4.13
  },
  {
    "Country": "Italy",
    "CountryCode": "IT4",
    "Type": "White Wine",
    "Count": 57,
    "Price": 16.51,
    "Rating": 4.13
  },
  {
    "Country": "Languedoc-Roussillon",
    "CountryCode": "LR",
    "Type": "Champagne",
    "Count": 4,
    "Price": 19.24,
    "Rating": 4.45
  },
  {
    "Country": "Loire",
    "CountryCode": "LO",
    "Type": "Red Wine",
    "Count": 1,
    "Price": 25.99,
    "Rating": 3.9
  },
  {
    "Country": "Loire",
    "CountryCode": "LO2",
    "Type": "White Wine",
    "Count": 5,
    "Price": 34.59,
    "Rating": 4.4
  },
  {
    "Country": "New Zealand",
    "CountryCode": "NZ",
    "Type": "Rosé",
    "Count": 2,
    "Price": 13.49,
    "Rating": 4
  },
  {
    "Country": "New Zealand",
    "CountryCode": "NZ2",
    "Type": "Red Wine",
    "Count": 8,
    "Price": 31.98,
    "Rating": 3.76
  },
  {
    "Country": "New Zealand",
    "CountryCode": "NZ3",
    "Type": "White Wine",
    "Count": 31,
    "Price": 16.18,
    "Rating": 4.16
  },
  {
    "Country": "North Coast",
    "CountryCode": "NC",
    "Type": "Red Wine",
    "Count": 7,
    "Price": 19.13,
    "Rating": 4.03
  },
  {
    "Country": "North Coast",
    "CountryCode": "NC2",
    "Type": "White Wine",
    "Count": 2,
    "Price": 13.99,
    "Rating": 3.7
  },
  {
    "Country": "Portugal",
    "CountryCode": "PT",
    "Type": "Rosé",
    "Count": 2,
    "Price": 9.99,
    "Rating": 3.75
  },
  {
    "Country": "Portugal",
    "CountryCode": "PT2",
    "Type": "Red Wine",
    "Count": 1,
    "Price": 23.99,
    "Rating": 4
  },
  {
    "Country": "Portugal",
    "CountryCode": "PT3",
    "Type": "White Wine",
    "Count": 4,
    "Price": 9.24,
    "Rating": 3.95
  },
  {
    "Country": "South Africa",
    "CountryCode": "ZA",
    "Type": "Red Wine",
    "Count": 1,
    "Price": 14.99,
    "Rating": 3.7
  },
  {
    "Country": "South Africa",
    "CountryCode": "ZA2",
    "Type": "White Wine",
    "Count": 1,
    "Price": 16.99,
    "Rating": 4.1
  },
  {
    "Country": "Spain",
    "CountryCode": "ES",
    "Type": "Rosé",
    "Count": 2,
    "Price": 12.99,
    "Rating": 3.4
  },
  {
    "Country": "Spain",
    "CountryCode": "ES2",
    "Type": "Red Wine",
    "Count": 83,
    "Price": 34,
    "Rating": 4.04
  },
  {
    "Country": "Spain",
    "CountryCode": "ES3",
    "Type": "Champagne",
    "Count": 18,
    "Price": 13.71,
    "Rating": 3.95
  },
  {
    "Country": "Spain",
    "CountryCode": "ES4",
    "Type": "White Wine",
    "Count": 13,
    "Price": 15.53,
    "Rating": 3.98
  },
  {
    "Country": "United States",
    "CountryCode": "US",
    "Type": "Rosé",
    "Count": 8,
    "Price": 18.86,
    "Rating": 4.34
  },
  {
    "Country": "United States",
    "CountryCode": "US2",
    "Type": "Red Wine",
    "Count": 555,
    "Price": 50.72,
    "Rating": 4.13
  },
  {
    "Country": "United States",
    "CountryCode": "US3",
    "Type": "Champagne",
    "Count": 28,
    "Price": 26.7,
    "Rating": 4.06
  },
  {
    "Country": "United States",
    "CountryCode": "US4",
    "Type": "White Wine",
    "Count": 143,
    "Price": 20.37,
    "Rating": 4.01
  }
  
];