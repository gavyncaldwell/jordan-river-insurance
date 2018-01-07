import styled from 'styled-components'
import Link from 'next/link'

import { flexContainer } from '../styles/tools/mixins'
import { neutral6 } from '../styles/tools/colors'

const Header = styled.header`
  width: 100%;
  padding: 14px calc(50% - 600px);

  @media(max-width: 1228px) {
    padding: 14px;
  }

  > img {
    width: 100%;
    height: auto;
  } 
`

const Menu = styled.div`
  ${flexContainer('center', 'center')}
  width: 100%;

  > a {
    padding: 8px;
    color: ${neutral6}
  }
`

export default () => {
  return (
    <Header>
      <img
        src='http://jordanriverinsurance.com/wp-content/uploads/2017/01/JordanRiverLOGO_8in_300dpi@2x-1015x159-6877.png'
        alt='jordan river insurance' />

      <Menu className='c-menu'>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/contact-us/our-location'><a>Our Location</a></Link>
        <a target='_blank' href='http://calendly.com/jri/call'>Schedule a Call</a>
      </Menu>
    </Header>
  )
}
