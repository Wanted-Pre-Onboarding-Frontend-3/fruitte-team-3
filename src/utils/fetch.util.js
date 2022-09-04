import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useQuery = ({ fetch, getId }) => {
  const [value, setValue] = useState(null);

  const refetch = useCallback(async () => {
    const { data } = await axios.get(fetch);

    const resData = data.products ?? data;
    const itemData = resData?.find((item) => {
      return item.product_id === getId;
    });
    setValue(itemData ?? resData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { value, refetch };
};
