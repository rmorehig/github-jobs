import { useCallback, useReducer, useEffect } from 'react'
import { useLocation } from 'wouter'

const ACTIONS = {
  SET_CITY: 'SET_CITY',
  SET_FULL_TIME: 'SET_FULL_TIME',
  SET_LOCATION: 'SET_LOCATION'
}
const cities = ['London', 'Amsterdam', 'New York', 'Berlin']

const initialState = {
  currentCity: '',
  fullTime: false,
  location: ''
}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_FULL_TIME:
      return { ...state, fullTime: payload.fullTime }
    case ACTIONS.SET_LOCATION:
      return { ...state, location: payload.location, city: '' }
    case ACTIONS.SET_CITY:
      return { ...state, city: payload.city, location: '' }
    default: {
      return state
    }
  }
}

export default function useFilters() {
  const [, pushLocation] = useLocation()
  const [{ city, fullTime, location }, dispatch] = useReducer(
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
        type: ACTIONS.SET_CITY,
        payload: { city: event.target.checked ? event.target.name : '' }
      })
    },
    [dispatch]
  )
  const handleSubmit = event => {
    event.preventDefault()
  }

  useEffect(() => {
    if (city || fullTime || location) {
      pushLocation(
        `/search?${fullTime ? `full_time=${fullTime}` : ''}${
          location || city
            ? `${fullTime ? '&' : ''}location=${location || city}`
            : ''
        }`
      )
    }
  }, [city, fullTime, location, pushLocation])

  return {
    cities,
    city,
    fullTime,
    location,
    handleChangeCity,
    handleChangeFullTime,
    handleChangeLocation,
    handleSubmit
  }
}
