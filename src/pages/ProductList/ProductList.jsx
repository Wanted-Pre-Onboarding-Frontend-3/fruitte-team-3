import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import BottomSection from '../../components/ProductList/BottomSection';
import { Flex, Section, Text } from '../../components/ProductList/Common';
import Pagination from '../../components/ProductList/Pagination';
import ProductItem from '../../components/ProductList/ProductItem';
import TopSection from '../../components/ProductList/TopSection';
import product_list from '../../mock/product_list.json';
import colors from '../../styles/colors';
import { useDefaultSearchParams } from '../../utils/hooks';

export default function ProductList() {
  useDefaultSearchParams({ page: 1 });
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const pagePerCount = 10;
  const currentPage = parseInt(searchParams.get('page') ?? 1);
  const totalCount = productList.length;
  const offset = (currentPage - 1) * pagePerCount;
  const currentPageProductList = productList.slice(
    offset,
    offset + pagePerCount,
  );

  useEffect(() => {
    setProductList(product_list);
  }, []);

  const handlePagination = (page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  return (
    <>
      <TopSection />
      <ProductListSection>
        <Flex gap={8}>
          <Text fontWeight={600} textAlign="start">
            FRUITTE STORE
          </Text>
          <Text color={colors.spring}>{totalCount}</Text>
        </Flex>
        <ProductGrid>
          {currentPageProductList.map((product, i) => {
            return <ProductItem key={product.id} data={product} />;
          })}
        </ProductGrid>
        <PaginationWrapper
          totalCount={totalCount}
          pagePerCount={pagePerCount}
          page={currentPage}
          onChange={handlePagination}
        />
      </ProductListSection>
      <BottomSection />
    </>
  );
}

const PaginationWrapper = styled(Pagination)`
  align-self: center;
`;

const ProductListSection = styled(Section)`
  margin: 0 auto;
  width: fit-content;
  align-items: flex-start;
  padding: 0 12px;
  gap: 24px;
`;

const ProductGrid = styled.ul`
  display: grid;
  align-self: center;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
