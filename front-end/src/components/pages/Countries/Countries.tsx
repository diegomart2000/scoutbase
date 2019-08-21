import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { push } from 'utils/history';
import { GET_COUNTRIES, CountriesData } from 'api/Queries';

import Page, { Title, Helper, Back } from 'components/common/Page';
import List from './List';

const CountryList: React.FC = () => {
  const { loading, data } = useQuery<CountriesData>(GET_COUNTRIES);

  return (
    <Page>
      <Title><Back onClick={() => push('/')} />Countries</Title>
      <Helper>Click over a country to get details</Helper>

      <List loading={loading} countries={data && data.countries} />
    </Page>
  )
}

export default CountryList;