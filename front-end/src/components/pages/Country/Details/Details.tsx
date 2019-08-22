import React from 'react';
import { Country } from 'types/Country';
import { Loader } from 'components/common/Page';
import { DetailsCard } from './Styled';

type Props = {
  loading: boolean;
  country?: Country;
}

const Details: React.FC<Props> = ({ loading,  country}: Props) => (
  <>
    {
      loading
        ? <Loader>Loading</Loader>
        : <>
          {country
            ? <DetailsCard>
                <h3>{country.name}</h3>
                <p><em>Phone prefix:</em> +{country.phone}</p>
                <p><em>Currency:</em> {country.currency}</p>
              </DetailsCard>

            :  <h3>404 Country not found</h3>
          }
        </>
    }
  </>
);

export default Details;