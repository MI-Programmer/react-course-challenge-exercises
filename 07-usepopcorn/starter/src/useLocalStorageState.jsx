import { useEffect, useState } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem(key)) || initialState;
    return storageValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
};
