import styled, { css } from 'styled-components'
import { flexContainer, flexItem } from './tools/mixins'
import { neutral1 } from './tools/colors'

export const Section = styled.div`
  ${flexContainer('center')}
  width: 100%;
  padding: 40px calc(50% - 600px);
  background-color: #fff;

  @media (max-width: 1248px) {
    padding: 24px;
  }

  .c-section-img {
    width: 100%;
    height: auto;
    padding-bottom: 24px;
  }

  .c-header-text {
    width: 100%;
    padding-bottom: 20px;
  }

  ${props => props.centerText && css`
    text-align: center;

    > h1, h3, p {
      width: 100%;
      padding-bottom: 40px;
    }
  `}

  ${props => props.gray && css`
    background-color: ${neutral1};
  `}
`

export const Aside = styled.aside`
  ${flexContainer('center')}
  ${flexItem('500px', '1')}
  margin: 16px;

  @media (max-width: 800px) {
    text-align: center;
  }

  ${props => props.textAlignRight && css`
    text-align: right;
  `}


  ${props => props.lastOnMobile && css`
    @media (max-width: 911px) {
      order: 2;
    }
  `}

  ${props => props.borderAside && css`
    flex-basis: 100px;
    flex-grow: 0;
    border-top: 4px solid ${neutral1};

    @media (max-width: 811px) {
      flex-grow: 1;
    }
  `}

  ${props => props.placeholder && css`
    flex-basis: 100px;
    flex-grow: 0;
  `}

  ${props => props.small && css`
    flex-basis: 200px;
  `}

  ${props => props.leftAlignMobile && css`
    @media (max-width: 800px) {
      text-align: left;
    }
  `}
`

export const Ul = styled.ul`
  width: 100%;
  padding-bottom: 40px;
  padding-left: 0;

   > li {
     margin-left: 0;
   }
`
