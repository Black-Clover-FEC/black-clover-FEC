import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const StyleLib = {

  GlobalStyle: createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }
  `,

  appDiv: styled.div`
  width: 80%;
  max-width: 1500px;
  margin: auto;
  `,

  header: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
  width: 100%;
  vertical-align: center;
  background-color: #2E4552;
  padding-top: 1em;
  padding-bottom: 1em;
  `,

  logo: styled.div`
  font-family: 'Chonburi', cursive;
  font-size: 3.5em;
  text-align: left;
  display: block;
  color: #2A9D8F;
  `,

  h1: styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2.5em;
  text-align: left;
  color: #2E4552;
  text-transform: capitalize;
  padding-top: 2rem;
  padding-bottom: 1rem;
  `,

  h2: styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  letter-spacing: 0.15em;
  text-align: left;
  color: #2A9D8F;
  text-transform: uppercase;
  padding-top: 2rem;
  padding-bottom: 1rem;
  `,

  h3: styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.5em;
  text-align: left;
  color: #2E4552;
  text-transform: capitalize;
  padding-top: 2rem;
  padding-bottom: 1rem;
  `,

  h4: styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.2em;
  text-align: left;
  color: #2E4552;
  text-transform: none;
  padding-top: 2rem;
  padding-bottom: 1rem;
  `,

  h5: styled.h5`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: 0.15em;
  text-align: left;
  color: #2A9D8F;
  text-transform: uppercase;
  padding-top: 2rem;
  padding-bottom: 1rem;
  `,

  h6: styled.h6`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1em;
  text-align: left;
  color: #E7A66C;
  text-transform: none;
  padding-bottom: 1rem;
  padding-top: 2rem;
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
  cursor: pointer;
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
  width: ${props => props.width === undefined ? 'auto' : props.width};
  `,

  factorBlock: styled.li`
  list-style: none;
  border: none;
  border-bottom: 2px #D5D5D5 solid;
  padding-bottom: 0.3em;
  `,

  recommendBlock: styled.div`
  border: none;
  border-bottom: 2px #D5D5D5 solid;
  padding-bottom: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  padding-top: 0.5em;
  padding-bottom: 0.25em;
  `,

  inputsFlex: styled.div`
  border: none;
  display: flex;
  flex-direction: row
  align-items: start;
  justify-content: space-between;
  width: 5em;
  `,

  starsInput: styled.span`
  font-size: 2em;
  color: #E7A66C;
  `,

  textarea: styled.textarea`
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  padding: 5px;
  width: 100%;
  resize: none;
  `,

  hiddenInput: styled.input`
  display: block;
  height: 0;
  width: 0;
  position: absolute;
  opacity: 0;
  `,

  inputOptionFlex: styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  height: ${props => props.height || 'auto'};
  align-items: ${props => props.alignItems || 'normal'};
  justify-content: space-between;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: none;
  padding-top: 0.5em;
  padding-bottom: 0.25em;
  `,

  inputOptionLabel: styled.label`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: none;
  `,

  factorLabel: styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: left;
  color: #424242;
  text-transform: none;
  padding-top: 1em;
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

  popOutMore: keyframes`
  from {
  transform: translateZ(0);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}

  to {
  transform: translateZ(100px);
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.5);
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

  text3D: keyframes`
  from {
    transform: translateY(0);
    transform-origin: 50% 50%;
  }

  to {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
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

StyleLib.linkButton = styled.button`
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
`;



export default StyleLib;