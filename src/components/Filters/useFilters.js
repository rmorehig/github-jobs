import { useEffect, useCallback } from "react";
import { useSearch } from "context/search";

export default function useFilters() {
  const {
    cities,
    params,
    setFullTime,
    setLocation,
    updateSearch,
  } = useSearch();
  const { fullTime, location } = params;
  const handleChangeFullTime = useCallback(
    (event) => {
      setFullTime(event.target.checked);
    },
    [setFullTime]
  );

  const handleChangeLocation = useCallback(
    (event) => {
      setLocation(event.target.value);
    },
    [setLocation]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      updateSearch();
    },
    [updateSearch]
  );

  useEffect(() => {
    if (fullTime) {
      updateSearch();
    }
  }, [fullTime, updateSearch]);

  return {
    cities,
    handleChangeFullTime,
    handleChangeLocation,
    handleSubmit,
    fullTime: fullTime === "true" || fullTime,
    location,
  };
}
