import styled from 'styled-components';

const StyleLib = {

  h1: styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2.5em;
  text-align: left;
  color: #2E4552;
  text-transform: capitalize;
  `,

  h2: styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  letter-spacing: 0.15em;
  text-align: left;
  color: #2A9D8F;
  text-transform: uppercase;
  `,

  h3: styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.5em;
  text-align: left;
  color: #2E4552;
  text-transform: capitalize;
  `,

  h4: styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.2em;
  text-align: left;
  color: #2E4552;
  text-transform: none;
  `,

  h5: styled.h5`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: 0.15em;
  text-align: left;
  color: #2A9D8F;
  text-transform: uppercase;
  `,

  p: styled.p`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  `,

  button: styled.button`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: uppercase;
  background-color: white;
  border: solid;
  border-radius: 10px;
  padding: 10px;
  `,

  dropdown: styled.select`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: uppercase;
  background-color: white;
  border: solid;
  border-radius: 10px;
  padding: 10px;
  `,

  spanTrimRight: styled.span`
  clip-path: inset(0 ${props => props.percentage}% 0 0);
  position: absolute;
`,

  spanTrimLeft: styled.span`
  clip-path: inset(0 0 0 ${props => props.percentage}%);
`

};

export default StyleLib;