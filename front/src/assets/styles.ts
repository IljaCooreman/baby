import styled, { css } from "react-emotion";


export const Input = styled('input')(`
background: white;
min-height: 42px;
width: 126px;
text-align: center;
max-width: 400px;
border: 2px solid #67D0DC;
border-radius: 21px;
padding: 0 21px;
margin: 10px auto;
width: 100%;
justify-self: center;
`, ({ error }: { error?: boolean }) => ({
    border: `2px solid ${error ? '#F160AD' : '#67D0DC'}`,
  }))
  ;

export const FixedSpan = styled('span')`
  position: relative;
  min-height: 20px;
  color: #F160AD;
`;

export const labelContainerStyles = css`
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 50px;
`;

