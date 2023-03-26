import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx'
import { FaRegStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

const RelatedLib = {

  carousel: styled.section`
  display: block;
  padding-left: 100px;
  padding-right: 100px;
  `,

  imgContainer: styled.div`
  position: relative;
  width: 230px;
  `,

  card: styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  // background-color: #D5D5D5;
  width: 231.5px;
  height: 470px;
  border-radius: 10px;
  border: solid;
  border-width: 0.5px;
  margin: 5px;
  `,

  times: styled(FaTimesCircle)`
  position: absolute;
  width: 10%;
  height: 20px;
  left: 85%;
  top: 15px;
  color: red;
  `,

  plus: styled(FaPlus)`
  position: absolute;
  color: black;
  width: 100%;
  height: 10%;
  top: 40%;
  `,

  addOutfitText: styled(StyleLib.blockLabel)`
    position: absolute;
    top: 70%;
    left: 17%;
  `,

  compareStar: styled(FaRegStar)`
  color: #E2C577;
  position: absolute;
  width: 10%;
  height: 20px;
  left: 85%;
  top: 15px;
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