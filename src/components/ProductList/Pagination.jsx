import styled from 'styled-components';

export default function Pagination({
  totalCount,
  pagePerCount,
  page,
  onChange,
  ...props
}) {
  const pageLength = Math.ceil(totalCount / pagePerCount);
  const paginationList = [...new Array(pageLength)];

  const handlePrevButton = () => {
    onChange(page - 1);
  };

  const handleNextButton = () => {
    onChange(page + 1);
  };

  const handlePageButton = (page) => () => {
    onChange(page);
  };

  return (
    <PaginationList {...props}>
      <Button onClick={handlePrevButton} disabled={page === 1}>
        &lt;
      </Button>
      {paginationList.map((_, i) => {
        const pageNumber = i + 1;

        return (
          <Button
            key={pageNumber}
            onClick={handlePageButton(pageNumber)}
            active={pageNumber === page}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        onClick={handleNextButton}
        disabled={page === paginationList.length}
      >
        &gt;
      </Button>
    </PaginationList>
  );
}

const PaginationList = styled.ol`
  display: flex;
  gap: 2px;
`;

const Button = styled.button`
  border: 1px solid black;
  background-color: transparent;
  border-radius: 8px;
  min-width: 24px;
  padding: 4px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  border-width: ${(props) => (props.active ? '2px' : '1px')};
`;
