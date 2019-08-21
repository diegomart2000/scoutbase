import gql from 'graphql-tag';
import { Country } from 'types/Country';

export const GET_COUNTRY_BY_CODE = gql`
  query getCountry($code: String!) {
    country(code: $code) {
      code
      name
      phone
      currency
    }
  }
`;

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      code
      name
      continent {
        code
        name
      }
      languages {
        code
        name
        native
      }
    }
  }
`;

export interface CountryVars {
  code: string;
}

export interface CountryData {
  country: Country
}

export interface CountriesData {
  countries: Array<Country>
}