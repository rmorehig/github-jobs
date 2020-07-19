import React, { useState } from 'react'
import { Background, Button, Form, Input } from './styles'

const Search = () => {
  const [description, setDescription] = useState('')

  const handleChange = event => {
    setDescription(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <Background>
      <Form onSubmit={handleSubmit}>
        <span className="material-icons">work_outline</span>
        <Input
          id="description"
          onChange={handleChange}
          placeholder="Title, companies, expertise or benefits"
          type="text"
          value={description}
        />

        <Button type="submit">Search</Button>
      </Form>
    </Background>
  )
}

export default Search
