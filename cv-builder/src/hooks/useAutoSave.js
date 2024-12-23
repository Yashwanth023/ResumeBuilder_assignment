import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const useAutoSave = (data, saveFunction, delay = 1000) => {
  const debouncedSave = useCallback(
    debounce((data) => {
      saveFunction(data);
    }, delay),
    [saveFunction, delay]
  );

  useEffect(() => {
    if (data) {
      debouncedSave(data);
    }
    return () => debouncedSave.cancel();
  }, [data, debouncedSave]);
};

