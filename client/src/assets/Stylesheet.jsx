import styled from 'styled-components';

const StyleLib = {

  h1: styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2.5em;
  text-align: left;
  color: #2E4552;
  text-transform: capitalize;
  padding-bottom: 7px;
  `,

  h2: styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  letter-spacing: 0.15em;
  text-align: left;
  color: #2A9D8F;
  text-transform: uppercase;
  padding-bottom: 7px;
  `,

  h3: styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.5em;
  text-align: left;
  color: #2E4552;
  text-transform: capitalize;
  padding-bottom: 7px;
  `,

  h4: styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.2em;
  text-align: left;
  color: #2E4552;
  text-transform: none;
  padding-bottom: 7px;
  `,

  h5: styled.h5`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: 0.15em;
  text-align: left;
  color: #2A9D8F;
  text-transform: uppercase;
  padding-bottom: 7px;
  `,

  h6: styled.h6`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1em;
  text-align: left;
  color: #E7A66C;
  text-transform: none;
  padding-bottom: 7px;
  `,

  p: styled.p`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  padding-bottom: 5px;
  `,

  small: styled.small`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 0.8em;
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

  linkButton: styled.button`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  text-align: center;
  color: #424242;
  text-transform: capitalize;
  background-color: inherit;
  border: none;
  text-decoration: underline;
  margin-left: 5px;
  margin-right: 5px;
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
`,

  tile: styled.li`
  list-style: none;
  border: none;
  border-bottom-style: solid;
  // border-radius: 20px;
  padding: 20px;
  // margin: 10px;
  // background-color: #2A9D8F;
  `,

  coloredDiv: styled.div`
  background-color: #2E4552;
  // border-radius: 20px;
  padding: 15px 20px 15px 20px;
  `

};

export default StyleLib;