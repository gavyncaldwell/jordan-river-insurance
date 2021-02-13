import styled from 'styled-components'
import Link from 'next/link'

import { flexContainer, flexItem } from '../styles/tools/mixins'

const Footer = styled.footer`
  ${flexContainer('alignContent': 'center')}
  width: 100%;
  background-color: #fff;
  padding: 40px 100px;

  @media(max-width: 820px) {
    justify-content: center;
    padding: 40px 10px;
  }
`

const Links = styled.div`
  ${flexContainer('center', 'center')}
  ${flexItem('400px', '0')}
  padding: 24px 8px;

  > a {
    padding: 8px;
  }
`

export default () => {
  return (
    <Footer>
      <Links>
        <Link href='/terms'>
          <a>Terms &amp; Conditions</a>
        </Link>
        <Link href='privacy-policy'>
          <a href=''>Privacy Policy</a>
        </Link>
      </Links>
    </Footer>
  )
}
