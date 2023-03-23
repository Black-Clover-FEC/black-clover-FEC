import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx'

const RelatedLib = {

  carousel: styled.section`
  display: block;
  padding-left: 100px;
  padding-right: 100px;
  text-algin: center;
  `,

  card: styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: silver;
  width: 230px;
  height: 470px;
  border-radius: 10px;
  // border: solid;
  // border-width: 1px;
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

  modalHeader: styled.div`
    display: grid;
  `,

  modalBody: styled.div`
    display: grid;
  `


}

export default RelatedLib;