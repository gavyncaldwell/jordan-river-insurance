import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  margin: 24px calc(50% - 500px);
  padding: 24px;
  border: 1px solid gray;
  border-radius: 8px;

  @media(max-width: 1048px) {
    margin: 24px;
  }

  input {
    width: 100%;
    margin: 8px 4px;
    padding: 8px 16px;
    border: 1px solid gray;
    border-radius: 4px;
    outline: 0;
  }
`
