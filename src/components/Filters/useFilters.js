import { useCallback, useReducer } from 'react'

const ACTIONS = {
  SET_FULL_TIME: 'SET_FULL_TIME',
  SET_LOCATION: 'SET_LOCATION',
  SET_CURRENT_CITY: 'SET_CURRENT_CITY'
}
const cities = ['London', 'Amsterdam', 'New York', 'Berlin']

const initialState = {
  currentCity: null,
  fullTime: false,
  location: ''
}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_FULL_TIME:
      return { ...state, fullTime: payload.fullTime }

    case ACTIONS.SET_LOCATION:
      return { ...state, location: payload.value }
    case ACTIONS.SET_CURRENT_CITY:
      return { ...state, currentCity: payload.city }
    default: {
      return state
    }
  }
}

export default function useFilters() {
  const [{ currentCity, fullTime, location }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const handleChangeFullTime = useCallback(
    event => {
      dispatch({
        type: ACTIONS.SET_FULL_TIME,
        payload: { fullTime: event.target.checked }
      })
    },
    [dispatch]
  )

  const handleChangeLocation = useCallback(
    event => {
      dispatch({
        type: ACTIONS.SET_LOCATION,
        payload: { location: event.target.value }
      })
    },
    [dispatch]
  )

  const handleChangeCity = useCallback(
    event => {
      dispatch({
        type: ACTIONS.SET_CURRENT_CITY,
        payload: { city: event.target.checked && event.target.name }
      })
    },
    [dispatch]
  )
  return {
    cities,
    currentCity,
    fullTime,
    location,
    handleChangeCity,
    handleChangeFullTime,
    handleChangeLocation
  }
}
