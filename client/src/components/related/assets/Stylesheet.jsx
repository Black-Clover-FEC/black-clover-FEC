import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx'

const RelatedLib = {

  carousel: styled.section`
  display: block;
  padding-left: 100px;
  padding-right: 100px;
  `,

  card: styled.div`
  display: inline-block;
  vertical-align: top;
  // background-color: #D5D5D5;
  width: 231px;
  height: 470px;
  border-radius: 10px;
  border: solid;
  border-width: 0.5px;
  margin: 5px;
  `,

  cardImg: styled.img`
  display: block;
  border-radius: 10px;
  max-width: 230px;
  height: auto;
  `,

  productInfo: styled.div`
    display: block;
    vertical-align: bottom;
  `,

  table: styled.table`
    width: 100%;
  `,

  // Apply StyledLib.h6 to th elements
  th: styled.th`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1em;
  text-align: center;
  color: #E7A66C;
  text-transform: none;
  padding-bottom: 7px;
  `,

  // Apply StyledLib.p to td elements
  td: styled.td`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: none;
  padding-bottom: 5px;
  `,

  tr: styled.tr`
  border: 1px solid;
  border-color: #D5D5D5;
  margin-bottom: 5px;
  // background-color: #D5D5D5;
`,


}

export default RelatedLib;