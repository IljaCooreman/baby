import styled, { css } from "react-emotion";


export const Input = styled('input')(`
background: white;
min-height: 50px;
text-align: center;
border: 2px solid #67D0DC;
border-radius: 25px;
padding: 0 21px;
margin: 10px auto;
width: 100%;
max-width: 300px;
justify-self: center;
background: rgba(255,255,255,.9);
`, ({ error }: { error?: boolean }) => ({
    background: error ? 'rgba(246,99,173,.9)' : 'rgba(255,255,255,.9)',
    border: `2px solid ${error ? '#F160AD' : '#67D0DC'}`,
  })
);

export const BigInput = styled('input')(`
background: rgba(255,255,255,.2);
color: white;
font-weight: 700;
font-size: 38px;
min-height: 65px;
text-align: center;
border-radius: 25px;
padding: 0 21px;
margin: 10px auto;
width: 100%;
max-width: 300px;
justify-self: center;
border: none;
`, ({ error }: { error?: boolean }) => ({
    background: error ? 'rgba(246,99,173,.9)' : 'rgba(255,255,255,.2)',
  })
);

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
  align-items: center;
`;

