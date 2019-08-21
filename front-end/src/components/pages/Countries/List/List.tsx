import React from 'react';
import { Country } from 'types/Country';

import { Loader } from 'components/common/Page';

import { ListContainer } from './Styled';

import Item from './Item';

type Props = {
  loading: boolean;
  countries?: Array<Country>;
}

const List: React.FC<Props> = ({ loading, countries}: Props) => (
  <ListContainer>
    {
      loading
        ? <Loader>Loading </Loader>
        : <>
          {countries && countries.map(country => <Item key={`country-${country.code}`} country={country}/>)}
        </>
    }
  </ListContainer>
);

export default List;