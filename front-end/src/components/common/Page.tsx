import styled, { keyframes } from 'styled-components';

const Page = styled.div`
  padding: 5rem 3rem;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  margin: 0 0 1rem 0;
`;

export const Helper = styled.span<{noback?: boolean}>`
  color: rgba(0,0,0,.54);
  display: inline-block;
  margin-left: ${({ noback }) => !noback && '3rem'};
  margin-top: -.5rem;
  margin-bttom: .5rem;
`;

export const Card = styled.div`
  padding: 2rem 3rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  border-radius: .5rem;

  > h3 {
    font-weight: 400;
    margin: 0 0 .5rem 0;
    cursor: pointer;
  }

  > p {
    margin: .5rem 0;
  }
`;

export const Back = styled.span`
  :before {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    content: '‹';
    height: 100%;
    width: 3rem;
  }
`;

const appear = keyframes`
  0% {
    width: 4px;
  }

  33% {
    width: 8px;
  }

  67% {
    width: 12px;
  }
`;

export const Loader = styled.div`
  display: inline-flex;
  margin-left: 3rem;

  :after {
    content: '...';
    display: inline-block;
    overflow: hidden;
    animation: ${appear} 1s linear infinite;
    margin-left: .25rem;
  }
`;

export default Page;