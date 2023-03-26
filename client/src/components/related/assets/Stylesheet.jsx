import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx'
import { FaFileImage, FaRegStar, FaArrowLeft, FaArrowRight, FaPlus, FaTimesCircle } from 'react-icons/fa';

const RelatedLib = {

  carousel: styled.section`
  display: inline-block;
  padding-left: 50px;
  padding-right: 50px;
  `,

  carouselItem: styled.div`
    display: flex;
    height: 20rem;
    min-width: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  `,

  leftArrow: styled(FaArrowLeft)`
    position: relative;
    top: 235px;
    font-size: 40px;
    &: hover {
      color: #E7A66C;
    }
  `,

  rightArrow: styled(FaArrowRight)`
    position: relative;
    top: 235px;
    font-size: 40px;
    &: hover {
      color: #E7A66C;
    }
  `,

  container: styled.div`
  width: 100%;
  padding: 5px;
  `,

  imgContainer: styled.div`
  position: relative;
  width: 230px;
  `,

  noImage: styled(FaFileImage)`
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
  cursor: pointer;
  &: hover {
    background-color: #D5D5D5;
    border-color: #D87659;
  }
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
  position: absolute;
  width: 10%;
  height: 20px;
  left: 85%;
  top: 15px;
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