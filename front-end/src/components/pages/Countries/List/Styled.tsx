import styled from 'styled-components';
import { Card } from 'components/common/Page';

export const ListContainer = styled.div`
  margin-top: 1rem;
`;

export const ItemCard = styled(Card)`
  > small {
    display: inline-block;
    padding: .2rem .5rem;
    border-radius: .25rem;
    background-color: rgba(0,0,0,.05);
    margin-right: .5rem;
  }
`;