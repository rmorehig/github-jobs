import styled from 'styled-components'

export const Company = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 16px;
`

export const Logo = styled.img`
  border-radius: 4px;
  height: 90px;
  object-fit: contain;
  width: 90px;
`

export const Info = styled.div``

export const Location = styled.div`
  align-items: center;
  display: flex;
  .material-icons {
    margin-right: 7.5px;
    font-size: 18px;
  }
`

export const MoreInfo = styled.div`
  color: #b9bdcf;
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 24px;
`

export const Time = styled(Location)`
  margin-left: 28px;
`
export const Title = styled.h3`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin: 8px 0 14px;
`
export const Type = styled.span`
  border: 1px solid #334680;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 6px 8px;
`

export const Wrapper = styled.li`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  margin-bottom: 23px;
  padding: 12px;
`
