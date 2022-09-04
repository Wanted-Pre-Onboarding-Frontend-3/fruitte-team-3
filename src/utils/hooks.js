import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useDefaultSearchParams(params_) {
  const [params, set_params] = useSearchParams();

  useEffect(() => {
    const keys = Object.keys(params_);
    if (keys.every((val) => params.has(val))) {
      return;
    }

    keys.forEach((key) => {
      if (!params.has(key)) {
        params.set(key, params_[key]);
      }
    });
    set_params(params, { replace: true });
  }, [params, params_, set_params]);

  const reset_params = useCallback(() => {
    const keys = Object.keys(params_);
    keys.forEach((key) => {
      params.set(key, params_[key]);
    });
    set_params(params, { replace: true });
  }, [params, params_, set_params]);

  return {
    reset_params,
  };
}
