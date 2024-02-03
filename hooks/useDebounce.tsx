import React from "react";

const useDebounce = (value: any, delay: number = 500) => {
  const [debouncedValue, setDebounceValue] = React.useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);
  return debouncedValue;
};

export default useDebounce;
