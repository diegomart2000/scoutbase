import React from 'react';
import { withRouter } from 'react-router';
import { push } from 'utils/history';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_BY_CODE, CountryData, CountryVars } from 'api/Queries';

import Page, { Title, Back } from 'components/common/Page';
import Details from './Details';

type Props = {
  match: any
};

type Match = {
  params: { code: string};
}

const Country: React.FC<Props> = (props: Props) => {
  const { params: { code } }: Match = props.match;
  const { loading, data } = useQuery<CountryData, CountryVars>(
    GET_COUNTRY_BY_CODE,
    { variables: { code } }
  );

  return (
    <Page>
      <Title><Back onClick={() => push('/countries')} />Country ({code})</Title>
      <Details loading={loading} country={data && data.country} />
    </Page>
  )
}

export default withRouter(Country);