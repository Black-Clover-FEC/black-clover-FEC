import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx'
import { FaFileImage, FaRegStar, FaArrowLeft, FaArrowRight, FaPlus, FaTimesCircle } from 'react-icons/fa';

const RelatedLib = {

  carouselContainer: styled.section`
    display: inline-block;
    width: 80%;
    overflow: hidden;
  `,

  content: styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  `,

  carouselItem: styled.div`
    display: inline-block;
    width: 25%;
    padding-left: 3px;
  `,

  leftArrow: styled(FaArrowLeft)`
    position: relative;
    bottom: 235px;
    margin-right: 1%;
    font-size: 40px;
    &: hover {
      color: #E7A66C;
    }
  `,

  rightArrow: styled(FaArrowRight)`
    position: relative;
    bottom: 235px;
    margin-left: 1%;
    font-size: 40px;
    &: hover {
      color: #E7A66C;
    }
  `,

  cardContainer: styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  // padding-left: 5%;
  `,

  container: styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  // top: 75%;
  // padding: 5px;
  // background-color: blue;
  `,

  iconContainer: styled.div`
    position: absolute;
    left: 82%;
    top: 1em;
    width: 10%;
  `,

  imgContainer: styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  `,

  noImage: styled(FaFileImage)`
  `,

  card: styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: solid;
  border-width: 0.5px;
  cursor: pointer;
  &: hover {
    background-color: #D5D5D5;
    border-color: #D87659;
  }
  `,

  cardImg: styled.img`
  display: block;
  position: relative;
  border-radius: 9px;
  width: 100%;
  height: auto;
  `,

  // text overflow not working currently
  productInfo: styled.div`
    overflow: visible;
    overflow-wrap: break-word;
    word-break: break-all;
    padding: 3px;
  `,

  plus: styled(FaPlus)`
  position: absolute;
  color: black;
  width: 100%;
  height: 10%;
  top: 40%;
  `,

  addOutfitText: styled(StyleLib.blockLabel)`
    position: relative;
    top: 70%;
    left: 17%;
  `,

  times: styled(FaTimesCircle)`
  position: absolute;
  width: 10%;
  height: 20px;
  left: 85%;
  top: 15px;
  color: #E7A66C;
  cursor: pointer;
  &: hover {
    color: red;
  }
  `,

  compareStar: styled(FaRegStar)`
  color: #E2C577;
  // position: absolute;
  position: relative;
  width: 100%;
  height: 20px;
  // left: 85%;
  // top: 15px;
  cursor: pointer;
  &: hover {
    color: yellow;
  }
  `,

  table: styled.table`
    width: 100%;
  `,

  tr: styled.tr`
  border: 1px solid;
  border-color: #D5D5D5;
  margin-bottom: 5px;
  // background-color: #D5D5D5;
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

}

export default RelatedLib;