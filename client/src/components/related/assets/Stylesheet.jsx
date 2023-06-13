import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx';
import {
  FaFileImage,
  FaRegStar,
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaTimesCircle,
} from 'react-icons/fa';

const RelatedLib = {
  carouselContainer: styled.section`
    display: inline-block;
    width: 80%;
    overflow: hidden;
    height: 400px;
  `,

  content: styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
    height: 400px;
  `,

  carouselItem: styled.div`
    display: inline-block;
    width: 25%;
    padding-left: 3px;
    height: 400px;
  `,

  leftArrow: styled(FaArrowLeft)`
    position: relative;
    width: 3%;
    height: 100%;
    margin: auto;
    margin-right: 1%;
    font-size: 40px;
    margin-bottom: 20%;
    color: #424242;
    &: hover {
      color: #e7a66c;
      cursor: pointer;
    }
  `,

  rightArrow: styled(FaArrowRight)`
    position: relative;
    width: 3%;
    height: 100%;
    bottom: 50%;
    margin: auto;
    margin-left: 1%;
    margin-bottom: 20%;
    font-size: 40px;
    color: #424242;
    &: hover {
      color: #e7a66c;
      cursor: pointer;
    }
  `,

  cardContainer: styled.div`
    position: relative;
    width: 100%;
    height: 400px;
  `,

  container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,

  iconContainer: styled.div`
    position: absolute;
    left: 83%;
    top: 4%;
    width: 10%;
  `,

  noImgContainer: styled.div`
    position: relative;
    width: 100%;
    height: 225px;
    text-align: center;
  `,

  noImage: styled(FaFileImage)`
    position: relative;
    width: 50%;
    height: auto;
    margin: auto;
    padding-top: 50%;
    color: #e7a66c;
  `,

  card: styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: solid;
    border-width: 0.5px;
    border-color: #a9a9a9;
    cursor: pointer;
    &: hover {
      animation: ${StyleLib.popOutMore} 0.4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  `,

  cardImg: styled.img`
    display: block;
    position: relative;
    border-radius: 9px;
    object-fit: cover;
    height: 225px;
    width: 100%;
  `,

  // text overflow not working currently
  productInfo: styled.div`
    padding: 8px;
  `,

  plus: styled(FaPlus)`
    position: relative;
    color: #424242;
    width: 20%;
    height: auto;
    margin: auto;
    margin-top: 75%;
  `,

  addOutfitText: styled.div`
    position: relative;
    left: 17%;
    width: auto;
    height: 100%;
    margin: auto;
    margin-bottom: 85px;
  `,

  times: styled(FaTimesCircle)`
    position: absolute;
    width: 100%;
    height: 20px;
    color: #e7a66c;
    cursor: pointer;
    &: hover {
      color: red;
    }
  `,

  compareStar: styled(FaRegStar)`
    color: #d87659;
    position: relative;
    width: 100%;
    height: 20px;
    cursor: pointer;
    &: hover {
      color: #e2c577;
    }
  `,

  table: styled.table`
    width: 100%;
  `,

  tr: styled.tr`
    border: 1px solid;
    border-color: #d5d5d5;
    margin-bottom: 5px;
  `,

  // Apply StyledLib.h6 to th elements
  th: styled.th`
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 1em;
    text-align: center;
    color: #e7a66c;
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
};

export default RelatedLib;
