import React from 'react'
import {
  Company,
  Container,
  Logo,
  Info,
  Location,
  MoreInfo,
  Time,
  Title,
  Type,
  Wrapper
} from './styles'
import { timeSince } from 'utils/date'

const Job = ({ company, company_logo, created_at, location, title, type }) => {
  return (
    <Wrapper>
      <Logo alt={`${company} logo`} src={company_logo} />
      <Container>
        <Info>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <Type>{type}</Type>
        </Info>
        <MoreInfo>
          <Location>
            <span className="material-icons">public</span>
            <span>{location} </span>
          </Location>
          <Time>
            <span className="material-icons">schedule</span>
            <time>{`${timeSince(created_at)} ago`}</time>
          </Time>
        </MoreInfo>
      </Container>
    </Wrapper>
  )
}

export default Job
