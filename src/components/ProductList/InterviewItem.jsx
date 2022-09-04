import React from 'react';
import styled from 'styled-components';

import { Image } from './Common';

export default function InterviewItem({ data }) {
  return <SquareImage src={data.image}></SquareImage>;
}

const SquareImage = styled(Image)`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
