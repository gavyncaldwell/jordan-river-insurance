import styled, { css, keyframes } from 'styled-components'
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
const picAnimation = keyframes`
  0% {
    background: url('/static/match-1.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  16% {
    background: url('/static/match-2.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  30% {
    background: url('/static/match-3.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  44% {
    background: url('/static/match-4.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  58% {
    background: url('/static/match-5.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  72% {
    background: url('/static/match-6.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  86% {
    background: url('/static/match-7.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  100% {
    background: url('/static/match-1.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const PicAnim = styled.div`
  width: 100%;
  animation: ${picAnimation} 8s linear infinite;

  > img {
    visibility: hidden;
    width: 100%;
    height: auto;
  }
`
