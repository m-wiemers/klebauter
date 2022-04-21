import { css } from 'styled-components';

export const heightTransOpen = css`
  max-height: 1000px;
  transition: max-height 2s ease-in-out;
`;

export const heightTransClose = css`
  max-height: 140px;
  transition: max-height 0.5s ease-in-out;
`;
