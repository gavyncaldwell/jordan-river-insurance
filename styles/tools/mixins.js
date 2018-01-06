// flex mixins
export const flexContainer = (
  justifyContent,
  alignItems,
  alignContent,
  flexWrap,
  flexDirection) => {
  return (
      `display: flex;
      justify-content: ${justifyContent || 'flex-start'};
      align-items: ${alignItems || 'flex-start'};
      align-content: ${alignContent || 'flex-start'};
      flex-direction: ${flexDirection || 'row'};
      flex-wrap: ${flexWrap || 'wrap'};`
  )
}

export const flexItem = (basis, grow, shrink) => {
  return (
    `flex-basis: ${basis || '100px'};
    flex-grow: ${grow || '1'};
    flex-shrink: ${shrink || '1'};`
  )
}
