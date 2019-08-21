import React from 'react';
import { push } from 'utils/history';

import Page, { Title, Helper } from 'components/common/Page';

const Home: React.FC = () => (
  <Page>
    <Title>Country GraphQL Example</Title>
    <Helper noback>Simple demo React application using Apollo Hooks</Helper>

    <p>
      <a onClick={() => push('/countries')}>Go to country list </a>
    </p>
  </Page>
)

export default Home;