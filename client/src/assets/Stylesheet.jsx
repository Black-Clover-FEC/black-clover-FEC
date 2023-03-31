import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const StyleLib = {

  appDiv: styled.div`
  width: 80%;
  max-width: 1500px;
  margin: auto;
  `,

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

  p: styled.p.attrs(props => ({
    color: props.color || '#424242'
  }))`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: ${props => props.color};
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
  visibility: ${props => props.visibility || 'visible'};
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
  cursor: pointer;
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
  cursor: pointer;
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

  vertPaddedList: styled.ul`
  list-style: none;
  padding: 1em 0 1em 0;
  `,

  tile: styled.li`
  list-style: none;
  border: none;
  border-bottom: solid #A9A9A9;
  padding: 20px;
  `,

  coloredDiv: styled.div`
  background-color: #2E4552;
  padding: 15px 20px 15px 20px;
  `,

  smallPhoto: styled.img`
  border: none;
  border-radius: 10px;
  height: 4em;
  margin: 0 .2em 0 .2em;
  `,

  bigPhoto: styled.img`
  border: none;
  width: 100%;
  height: 100%;
  object-fit: contain;
  `,

  blockLabel: styled.label`
  display: block;
  border-bottom: 2px #D5D5D5 solid;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  `,

  input: styled.input`
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  `,

  textarea: styled.textarea`
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  padding: 5px;
  `,

  hiddenInput: styled.input`
  display: block;
  height: 0;
  width: 0;
  position: absolute;
  opacity: 0;
  `,

  routerLink: styled(Link)`
  color: inherit;
  text-decoration: inherit;
  `,

  module: styled.section`
  padding: 2em 0 2em 0;
  `,

  form: styled.form`
  // width: 50%;
  // height: 80%;
  `,

  popOut: keyframes`
  from {
    transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  to {
    transform: translateZ(50px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
  `,

  buttonHover: keyframes`
  from {
    border-radius: 10px;
    background-color: white;
  }

  to {
    border-radius: 30px;
    background-color: #2A9D8F;
    color: white;
  }
  `,

  cancelHover: keyframes`
  from {
    border-radius: 10px;
    background-color: white;
  }

  to {
    border-radius: 30px;
    background-color: #D87659;
    color: white;
  }
  `,

};


StyleLib.linkTile = styled(StyleLib.tile)`
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`;


StyleLib.button = styled.button`
font-family: 'Quicksand', sans-serif;
font-weight: 500;
text-align: center;
color: #424242;
text-transform: uppercase;
background-color: white;
border: solid;
border-radius: 10px;
padding: 10px;
cursor: pointer;
margin: 0.5em;
&:hover {
  animation: ${props => props.cancel ? StyleLib.cancelHover : StyleLib.buttonHover} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;



export default StyleLib;