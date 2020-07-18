import React, { useState } from 'react'
import { Background, Button, Form, Input } from './styles'
import BriefcaseIcon from 'components/BriefcaseIcon'

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
        <BriefcaseIcon />
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
