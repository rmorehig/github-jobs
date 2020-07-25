import React, {
  useMemo,
  useReducer,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getParams } from "utils/navigation";

const SearchContext = React.createContext({});
const cities = ["London", "Amsterdam", "New York", "Berlin"];
const initialState = {
  cities,
  params: {},
  query: getParams({ search: window.location.search }),
};

const ACTIONS = {
  SET_DESCRIPTION: "SET_DESCRIPTION",
  SET_FULL_TIME: "SET_FULL_TIME",
  SET_LOCATION: "SET_LOCATION",
  SET_PARAMS: "SET_PARAMS",
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
    case ACTIONS.SET_PARAMS:
      return {
        ...state,
        params: { ...state.params, ...payload },
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
  const { search } = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, params, query } = state;

  const setDescription = useCallback(
    (description) => {
      dispatch({
        type: ACTIONS.SET_DESCRIPTION,
        payload: { description },
      });
    },
    [dispatch]
  );

  const setFullTime = useCallback(
    (fullTime) => {
      dispatch({
        type: ACTIONS.SET_FULL_TIME,
        payload: { fullTime },
      });
    },
    [dispatch]
  );

  const setLocation = useCallback(
    (location) => {
      dispatch({
        type: ACTIONS.SET_LOCATION,
        payload: { location },
      });
    },
    [dispatch]
  );

  const setParams = useCallback(
    (params) => {
      dispatch({
        type: ACTIONS.SET_PARAMS,
        payload: {
          ...params,
        },
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

  useEffect(() => {
    const params = {};
    new URLSearchParams(search).forEach((value, key) => (params[key] = value));
    setParams(params);
  }, [search, setParams]);

  const updateSearch = useCallback(() => {
    history.push(`/search?${query}`);
  }, [history, query]);

  const value = useMemo(
    () => ({
      cities,
      params,
      setDescription,
      setFullTime,
      setLocation,
      updateSearch,
    }),
    [cities, params, setDescription, setFullTime, setLocation, updateSearch]
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
