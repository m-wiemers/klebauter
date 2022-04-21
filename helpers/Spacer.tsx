import React from 'react';
import styled from 'styled-components';

type Props = {
  Height?: string;
};

const Wrapper = styled.div`
  height: ${({ Height }: Props) => (Height ? Height : '1rem')};
`;

const Spacer = ({ Height }: Props): JSX.Element => {
  return <Wrapper Height={Height}></Wrapper>;
};

export default Spacer;
