import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { Flex, Image, Text } from './Common';
import Tags from './Tags';

export default function ProductItem({ data }) {
  return (
    <ProductWrapper>
      <Link to={`/fruitstore/${data.id}`}>
        <Image src={data.image} alt="" />
        <Text>{data.name}</Text>
        <Flex gap={4}>
          <Text fontWeight={500}>{data.sale_price}원</Text>
          <Text textDecoration="line-through" color={colors.gray2}>
            {data.origin_price}원
          </Text>
        </Flex>
        <Flex gap={4}>
          {data.tags.map((tag) => {
            return (
              <Tags key={tag} tag={tag}>
                {tag}
              </Tags>
            );
          })}
        </Flex>
        <Text>{data.review_count}</Text>
      </Link>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  & img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;
