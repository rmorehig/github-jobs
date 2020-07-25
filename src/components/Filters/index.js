import React from "react";
import {
  CheckboxLabel,
  Container,
  FiltersWrapper,
  Input,
  InputLabel,
} from "./styles";
import useFilters from "./useFilters";

const Filters = () => {
  const {
    cities,
    city: currentCity,
    fullTime,
    location,
    handleChangeCity,
    handleChangeFullTime,
    handleChangeLocation,
    handleSubmit,
  } = useFilters();

  return (
    <FiltersWrapper>
      <form onSubmit={handleSubmit}>
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
          <Input>
            <span className="material-icons">public</span>
            <input
              onChange={handleChangeLocation}
              placeholder="City, state, zip code or country"
              type="text"
              value={location}
            />
          </Input>
        </InputLabel>
        <Container>
          {cities.map((city) => (
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
      </form>
    </FiltersWrapper>
  );
};

export default Filters;
