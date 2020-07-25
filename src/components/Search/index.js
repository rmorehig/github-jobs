import React, { useCallback } from "react";
import { Background, Button, Form, Input } from "./styles";
import { useSearch } from "context/search";

const Search = () => {
  const { params, setDescription, updateSearch } = useSearch();

  const handleChange = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      updateSearch();
    },
    [updateSearch]
  );

  return (
    <Background>
      <Form onSubmit={handleSubmit}>
        <span className="material-icons">work_outline</span>
        <Input
          id="description"
          onChange={handleChange}
          placeholder="Title, companies, expertise or benefits"
          type="text"
          value={params?.description}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Background>
  );
};

export default Search;
