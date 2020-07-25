import React, { useCallback } from "react";
import { Background, Button, Form, Input } from "./styles";
import { useSearch } from "context/SearchContext";

const Search = () => {
  const { description, setDescription, updateSearch } = useSearch();

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
          onChange={setDescription}
          placeholder="Title, companies, expertise or benefits"
          type="text"
          value={description}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Background>
  );
};

export default Search;
