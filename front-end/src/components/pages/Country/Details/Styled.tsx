import styled from 'styled-components';
import { Card } from 'components/common/Page';

export const DetailsCard = styled(Card)`
  > p {
    display: flex;

    > em {
      width: 100px;
      color: rgba(0,0,0,.54)
    }
  }
`;

