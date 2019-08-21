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

export type CountryVars = {
  code: string;
}

export type CountryData = {
  country: Country
}

export type CountriesData = {
  countries: Array<Country>
}