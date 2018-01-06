import styled from 'styled-components'

import { orange, lightOrange } from '../tools/colors'
import { flexItem } from '../tools/mixins'

export const LinkButton = styled.a`
  ${flexItem()}
  padding: 24px 48px;
  margin: 10px 64px;
  background-color: ${orange};
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  outline: 0;
  font-size: 24px;
  text-align: center;

  @media(max-width: 800px) {
    margin: 10px 24px;
  }

  &:hover {
    background-color: ${lightOrange}
  }
`
