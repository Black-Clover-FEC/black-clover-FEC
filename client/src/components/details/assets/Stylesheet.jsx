import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx';
import { FaExpand } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const DetailsLib = {
  header: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1fr;
  height: 75px;
  vertical-align: top;
  `,

  //border: solid #2A9D8F 1px;
  //background-color: #D3D3D3;
  //padding: 10px;

  logo: styled.img`
  float: left;
  display: inline-block;
  height: 75px;
  width: auto;
  cursor: pointer;
  `,

  searchBar: styled.input`
  float: right;
  display: inline-block;
  `,

  searchBarButton: styled(FaSearch)`
  float: right;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  `,

  cols: styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  `,

  col1: styled.section`
  grid-column: 1;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  `,
  // border: solid #2A9D8F 1px;
  // padding: 10px;

  // display: flex;
  // justify-content: space-between;

  /* Style the button and place it in the middle of the container/image */

  defaultImage: styled.img`
  width: auto;
  max-height: 500px;
  display: block;
  border-radius: 10px;
  cursor: zoom-in;
  `,

  openModalBtn: styled(FaExpand)`
  background-color: white;
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
  `,

  // modalBackground: styled.div`
  // width: 100%;
  // height: 100%;
  // background-color: #D3D3D3;
  // position: fixed;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // `,

  // modalContainer: styled.div`
  // width: 500px;
  // height: 500px;
  // border-radius: 12px;
  // background-color: white;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // display: flex;
  // flex-direction: column;
  // padding: 25px;
  // `,

  // modalCloseBtnContainer: styled.div`
  // display: flex;
  // justify-content: flex-end;
  // `,

  // modalCloseBtn: styled.button`
  // background-color: transparent;
  // border: none;
  // font-size: 25px;
  // cursor: pointer;
  // `,

  // modalTitle: styled.div`
  // display: inline-block;
  // text-align: center;
  // margin-top: 10px;
  // `,

  // modalBody: styled.div`
  // flex: 50%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-size: 1.7rem;
  // text-align: center;
  // `,

  // modalFooter: styled.div`
  // flex: 20%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // `,

  // modalFooterButton: styled.button`
  // width: 150px;
  // height: 45px;
  // margin: 10px;
  // border: none;
  // background-color: #2A9D8F;
  // color: white;
  // border-radius: 8px;
  // font-size: 20px;
  // cursor: pointer;
  // `,

  col2: styled.section`
  grid-column: 2;

  padding: 10px;
  text-align: left;
  min-width: 300px;
  min-height: 500px;
  `,
  //  border: solid #2A9D8F 1px;

  rating: styled.div`
  display: flex;
  justify-content: space-between;
  `,

  smallUnderline: styled(StyleLib.p)`
  font-size: x-small;
  text-decoration: underline;
  cursor: pointer;
  `,

  selectedStyle: styled(StyleLib.h2)`
  font-size: small;
  `,

  styleList: styled.div`
  display: inline-block;
  padding: 7px;
  `,

  styleListItem: styled.img`
  background-color: #fefbd8;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: small;
  cursor: pointer;
  `,

  center: styled.div`
  text-align: center;
  `,

  quantity: styled(StyleLib.dropdown)`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: uppercase;
  background-color: white;
  border: solid;
  border-radius: 10px;
  padding: 10px;
  width: 35%;
  float: right;
  cursor: pointer;
  `,

  size: styled(StyleLib.dropdown)`
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #424242;
  text-transform: uppercase;
  background-color: white;
  border: solid;
  border-radius: 10px;
  padding: 10px;
  width: 60%;
  float: left;
  cursor: pointer;
  `,

  addToBagButton: styled(StyleLib.button)`
  width: 80%;
  float: left;
  cursor: pointer;
  `,

  favoriteButton: styled(StyleLib.button)`
  width: 15%;
  float: right;
  cursor: pointer;
  background-color: #CDCDCD;
  `,

  faStarNotFavorite: styled(FaStar)`
  width: 100%;
  color: white;
  `,

  faStarFavorite: styled(FaStar)`
  width: 100%;
  color: yellow;
  `,

  description: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1fr;
  height: 100px;

  padding: 10px;
  vertical-align: top;
  `
  //border: solid #2A9D8F 1px;
}

export default DetailsLib;