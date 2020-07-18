import React, { useState } from 'react'
import { Background, Button, Form, Input } from './styles'
import BriefcaseIcon from 'components/BriefcaseIcon'

const Search = () => {
  const [search, setSearch] = useState('')

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <Background>
      <Form onSubmit={handleSubmit}>
        <BriefcaseIcon />
        <Input
          onChange={handleChange}
          placeholder="Title, companies, expertise or benefits"
          value={search}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Background>
  )
}

export default Search
