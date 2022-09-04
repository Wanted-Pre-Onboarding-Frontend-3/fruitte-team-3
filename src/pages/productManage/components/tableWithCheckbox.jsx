import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export default function TableWithCheckbox({ data, config }) {
  const { colSizes, fieldNames } = config;
  const [checked, setChecked] = useState();

  const handleAllCheck = (e) => {
    const isAllChecked = e.target.checked;
    setChecked((curr) => [...curr.map(() => isAllChecked)]);
  };

  const handleCheck = (idx, e) => {
    const newChecked = [...checked];
    newChecked[idx] = e.target.checked;
    setChecked(newChecked);
  };

  useEffect(() => {
    setChecked([...Array(data.length).fill(false)]);
  }, [data]);

  return (
    <Table>
      <colgroup>
        {colSizes.map((size, idx) => (
          <col key={`col-size-${idx}`} width={`${size}%`} />
        ))}
      </colgroup>
      <TableHead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={checked?.every((item) => item) ?? false}
              onChange={handleAllCheck}
            />
          </th>
          {fieldNames.map((name, idx) => (
            <th key={`field-${idx}`} scope="col">
              {name}
            </th>
          ))}
        </tr>
      </TableHead>
      <tbody>
        {data.map((item, idx) => (
          <TableRow key={item.id} data-item-id={item.id}>
            <TableData>
              <input
                type="checkbox"
                checked={checked[idx] ?? false}
                onChange={(e) => handleCheck(idx, e)}
              />
            </TableData>
            {Object.entries(item).map(([k, v]) => (
              <TableData key={`${k}-${item.id}`}>
                {typeof v === 'function' ? v() : v}
              </TableData>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const TableHead = styled.thead`
  & tr {
    background: ${colors.spring};
  }

  & th {
    ${fonts.Body1};
    padding: 10px 0;
    color: ${colors.white};
    text-align: center;
    vertical-align: middle;
  }
`;

const TableRow = styled.tr`
  background: ${colors.white};
  &:nth-of-type(odd) {
    background: ${colors.gray5};
  }
`;

const TableData = styled.td`
  padding: 10px 0;
  text-align: center;
  vertical-align: middle;
`;
