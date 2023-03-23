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
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-align: left;
  color: #424242;
  text-transform: inherit;
  background-color: white;
  border: none;
  border-bottom: solid;
  padding-left: 0;
  `,

  searchBar: styled.input`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  background-color: white;
  border: solid;
  border-radius: 10px;
  padding: 5px;
  width: 20em;
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
  padding: 20px;
  `,

  coloredDiv: styled.div`
  background-color: #2E4552;
  // border-radius: 20px;
  padding: 15px 20px 15px 20px;
  `,

  smallPhoto: styled.img`
  border: none;
  border-radius: 10px;
  height: 4em;
  margin: 0 .2em 0 .2em;
  `,

  blockLabel: styled.label`
  display: block;
  border-bottom: 2px #D5D5D5 solid;
  padding-bottom: 10px;
  padding-top: 10px;
  // margin-bottom: 10px;
  `,

  input: styled.input`
  display: block;
  `,

  textarea: styled.textarea`
  display: block;
  `,

  // starRating: styled.div`

  // input[type='radio'] {
  //   display: none;
  // }

  // cursor: pointer;

  // label {
  //   cursor: pointer;
  //   color: black;
  // }

  // :hover label {
  //   color: red;
  // }

  // label:hover ~ label {
  //   color: black;
  // }

  // input[type='radio']:checked ~ label {
  //   color: black;
  // `

};

export default StyleLib;