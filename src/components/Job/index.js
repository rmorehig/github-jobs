import React from 'react'
import { Logo, Info, MoreInfo, Type, Wrapper } from './styles'

const Job = ({ company, company_logo, created_at, location, title, type }) => {
  return (
    <Wrapper>
      <Logo alt={`${company} logo`} src={company_logo} />
      <Info>
        <span>{company}</span>
        <h3>{title}</h3>
        <Type>{type}</Type>
      </Info>
      <MoreInfo>
        <span>{location} </span>
        <time>{created_at}</time>
      </MoreInfo>
    </Wrapper>
  )
}

export default Job
