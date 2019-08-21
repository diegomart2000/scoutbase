import React from 'react';
import { push } from 'utils/history';

import { Country, Language } from 'types/Country';
import { ItemCard } from './Styled';

type Props = {
  country: Country;
}

const Item: React.FC<Props> = ({country: { code, name, continent, languages }}: Props) => (
  <ItemCard>
    <h3 onClick={() => push(`/countries/${code}`)}>{name}</h3>
    <p>{continent && continent.name}</p>
    {languages && languages.map((lan: Language) => <small key={`lan-${lan.code}`}>{lan.name}  </small>)}
  </ItemCard>
);

export default Item;