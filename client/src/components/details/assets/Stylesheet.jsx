import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx';

const DetailsLib = {
  header: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1fr;
  height: 75px;
  border: solid #2A9D8F 1px;
  background-color: #D3D3D3;
  padding: 10px;
  vertical-align: top;
  `,

  logo: styled.div`
  float: left;
  display: inline-block;
  `,

  searchBar: styled.div`
  float: right;
  display: inline-block;
  `,

  cols: styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  `,

  col1: styled.section`
  grid-column: 1;
  border: solid #2A9D8F 1px;
  padding: 10px;
  `,

  col2: styled.section`
  grid-column: 2;
  border: solid #2A9D8F 1px;
  padding: 10px;
  text-align: left;
  min-width: 300px;
  min-height: 500px;
  `,

  rating: styled.div`
  display: flex;
  justify-content: space-between;
  `,

  smallUnderline: styled(StyleLib.p)`
  font-size: x-small;
  text-decoration: underline;
  `,

  selectedStyle: styled(StyleLib.h2)`
  font-size: small;
  `,

  styleList: styled.div`
  display: inline-block;
  padding: 7px;
  `,

  styleListItem: styled.div`
  background-color: #fefbd8;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid #2A9D8F 2px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: small;
  `,

  center: styled.div`
  text-align: center;
  `,

  quantity: styled(StyleLib.dropdown)`
  width: 35%;
  float: right;
  `,

  size: styled(StyleLib.dropdown)`
  width: 60%;
  float: left;
  `,

  addToBagButton: styled(StyleLib.button)`
  width: 80%;
  float: left;
  `,

  favoriteButton: styled(StyleLib.button)`
  width: 15%;
  float: right;
  `,

  description: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1fr;
  height: 100px;
  border: solid #2A9D8F 1px;
  padding: 10px;
  vertical-align: top;
  `
}

export default DetailsLib;