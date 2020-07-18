import React from 'react'
import { CheckboxLabel, Container, Input, InputLabel, Wrapper } from './styles'
import useFilters from './useFilters'

const Filters = () => {
  const {
    cities,
    currentCity,
    fullTime,
    location,
    handleChangeCity,
    handleChangeFullTime,
    handleChangeLocation
  } = useFilters()

  return (
    <Wrapper>
      <CheckboxLabel>
        <input
          checked={fullTime}
          onChange={handleChangeFullTime}
          type="checkbox"
        />
        Full time
      </CheckboxLabel>
      <InputLabel>
        Location
        <Input
          onChange={handleChangeLocation}
          placeholder="City, state, zip code or country"
          type="text"
          value={location}
        />
      </InputLabel>
      <Container>
        {cities.map(city => (
          <CheckboxLabel key={city}>
            <input
              checked={city === currentCity}
              name={city}
              onChange={handleChangeCity}
              type="checkbox"
            />
            {city}
          </CheckboxLabel>
        ))}
      </Container>
    </Wrapper>
  )
}

export default Filters
