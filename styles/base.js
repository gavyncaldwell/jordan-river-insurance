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
  ${flexItem('400px', '1')}
  margin: 16px;

  ${props => props.textAlignRight && css`
    text-align: right;
  `}
`

// export const Container = styled.div`
//   ${flexContainer('center', 'center')};
//   width: 100%;
//   height: 100%;
// `

// export const Card = styled.div`
//   ${flexContainer('center')};
//   ${flexItem('100%', '1')};
//   margin: 32px calc(50% - 400px);
//   padding: 32px;
//   box-shadow: 4px 4px 16px 2px gray;
//   border-radius: 8px;

//   @media (max-width: 848px) {
//     margin: 24px;
//   }

//   > h1 {
//     width: 100%;
//     text-align: center;
//     padding-bottom: 24px;
//   }

//   > h3 {
//     width: 100%;
//     text-align: center;
//   }
// `

// export const Title = styled.h1`
//   width: 100%;
//   text-align: center;
//   font-size: 64px;
// `
