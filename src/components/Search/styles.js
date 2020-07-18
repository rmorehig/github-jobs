import styled from 'styled-components'

export const Background = styled.div`
  align-items: center;
  background: url('/images/background.png');
  background-position: 50% center;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  height: 138px;
  justify-content: center;
  margin-bottom: 29px;
  margin-top: 32px;
  padding: 18px;
`

export const Button = styled.button`
  background: #1e86ff;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 14px 27px;
`

export const Form = styled.form`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 4px 5px;
  position: relative;
  width: 100%;
`

export const Input = styled.input`
  color: #334680;
  flex: 1;
  overflow: hidden;
  padding-left: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
`
