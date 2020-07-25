import React, {
  useMemo,
  useReducer,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";

const SearchContext = React.createContext({});
const cities = ["London", "Amsterdam", "New York", "Berlin"];
const initialState = {
  cities,
  params: {
    description: "",
    fullTime: false,
    location: "",
  },
  query: "",
};

const ACTIONS = {
  SET_DESCRIPTION: "SET_DESCRIPTION",
  SET_FULL_TIME: "SET_FULL_TIME",
  SET_LOCATION: "SET_LOCATION",
  SET_QUERY: "SET_QUERY",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_DESCRIPTION:
      return {
        ...state,
        params: { ...state.params, description: payload.description },
      };
    case ACTIONS.SET_FULL_TIME:
      return {
        ...state,
        params: { ...state.params, fullTime: payload.fullTime },
      };
    case ACTIONS.SET_LOCATION:
      return {
        ...state,
        params: { ...state.params, location: payload.location },
      };
    case ACTIONS.SET_QUERY:
      return { ...state, query: payload.query };
    default: {
      return state;
    }
  }
};

const SearchProvider = ({ children }) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, description, fullTime, location, params, query } = state;

  const setDescription = useCallback(
    (event) => {
      dispatch({
        type: ACTIONS.SET_DESCRIPTION,
        payload: { description: event.target.value },
      });
    },
    [dispatch]
  );

  const setFullTime = useCallback(
    (event) => {
      dispatch({
        type: ACTIONS.SET_FULL_TIME,
        payload: { fullTime: event.target.checked },
      });
    },
    [dispatch]
  );

  const setLocation = useCallback(
    (event) => {
      dispatch({
        type: ACTIONS.SET_LOCATION,
        payload: { location: event.target.value },
      });
    },
    [dispatch]
  );

  const setQuery = useCallback(
    (query) => {
      dispatch({
        type: ACTIONS.SET_QUERY,
        payload: { query },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (Object.keys(params).length) {
      Object.keys(params).forEach((key) => {
        if (params[key]) {
          searchParams.set(key, params[key]);
        }
      });
      setQuery(searchParams.toString());
    }
  }, [params, setQuery]);

  const updateSearch = useCallback(() => {
    if (query) {
      history.push(`/search?${query}`);
    }
  }, [history, query]);

  const value = useMemo(
    () => ({
      cities,
      description,
      fullTime,
      location,
      setDescription,
      setFullTime,
      setLocation,
      updateSearch,
    }),
    [
      cities,
      description,
      fullTime,
      location,
      setDescription,
      setFullTime,
      setLocation,
      updateSearch,
    ]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
export { SearchProvider, useSearch };
