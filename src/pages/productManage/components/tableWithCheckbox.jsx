export default function TableWithCheckbox({ data, config }) {
  const { colSizes, fieldNames } = config;
  return (
    <table>
      <colgroup>
        {colSizes.map((size, idx) => (
          <col key={`col-size-${idx}`} width={`${size}%`} />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {fieldNames.map((name, idx) => (
            <th key={`field-${idx}`} scope="col">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} data-item-id={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            {Object.entries(item).map(([k, v]) => (
              <td key={`${k}-${item.id}`}>
                {typeof v === 'function' ? v() : v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
