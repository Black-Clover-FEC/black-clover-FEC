import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx';

const DetailsLib = {

  addToBagButton: styled(StyleLib.button)`
  width: 80%;
  float: left;
  `,

  header: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 75px;
  border: solid #2A9D8F 1px;
  background-color: #D3D3D3;
  padding: 10px;
  vertical-align: top;
  `,

  image: styled.div`
  display: inline-block;
  width: 500px;
  height: 500px;
  border: solid #2A9D8F 1px;
  padding: 5px;
  vertical-align: top;
  `,

  productInfo: styled.div`
  display: inline-block;
  width: 300px;
  height: 500px;
  border: solid #2A9D8F 1px;
  padding: 10px;
  text-align: left;
  vertical-align: top;
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

  description: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 100px;
  border: solid #2A9D8F 1px;
  padding: 10px;
  vertical-align: top;
  `
}

export default DetailsLib;