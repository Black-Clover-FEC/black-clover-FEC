import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx';
import { FaExpand, FaSearch, FaStar, FaCheckCircle, FaWindowClose, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { GiPlainCircle } from 'react-icons/gi'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DetailsLib = {
  header: styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1fr;
  height: 75px;
  vertical-align: top;
  `,

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
  height: 500px;
  `,

  defaultImage: styled.img`
  width: auto;
  max-height: 500px;
  display: flex;
  border-radius: 10px;
  cursor: zoom-in;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  `,

  imageThumbnail: styled.img`
  background-color: #fefbd8;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  object-fit: cover;
  display: block;
  align-items: center;
  text-align: center;
  font-size: small;
  cursor: pointer;
  margin: 5px;
  `,

  openModalBtn: styled(FaExpand)`
  background-color: white;
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
  `,

  closeModalBtn: styled(FaWindowClose)`
  background-color: white;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 1%;
  right: 1%;
  cursor: pointer;
  `,

  modalCarouselImg: styled.img`
  width: auto;
  height: 590px;
  display: block;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  cursor: zoom-in;
  `,

  modalCarouselThumbnail: styled(GiPlainCircle)`
  background-color: grey;
  display: block;
  margin: 3px;
  border-radius: 50%;
  padding: 1px;
  cursor: pointer;
  `,

  col2: styled.section`
  position: relative;
  left: 30px;
  grid-column: 2;
  padding: 10px;
  text-align: left;
  width: 325px;
  height: 500px;
  `,

  rating: styled.div`
  display: flex;
  justify-content: space-between;
  `,

  smallUnderline: styled(StyleLib.linkButton)`
  font-size: 0.75em;
  cursor: pointer;
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `,

  salePrice: styled(StyleLib.small)`
  color: red;
  `,

  origPriceCrossed: styled(StyleLib.small)`
  text-decoration: line-through;
  font-size: 0.6em;
  `,

  selectedStyle: styled(StyleLib.h2)`
  font-size: 0.8em;
  padding-top: 1rem;
  `,

  styleList: styled.div`
  position: relative;
  display: inline-block;
  padding: 7px;
  `,

  styleListItem: styled.img`
  background-color: #fefbd8;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  align-items: center;
  text-align: center;
  font-size: small;
  cursor: pointer;
  object-fit: cover;
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `,

  checkmark: styled(FaCheckCircle)`
  position: absolute;
  top: 1%;
  right: 1%;
  `,

  center: styled.div`
  display: flex;
  justify-content: space-between;
  // text-align: center;
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
  &:hover {
    animation: ${StyleLib.buttonHover} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
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
  &:hover {
    animation: ${StyleLib.buttonHover} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `,

  addToBagButton: styled(StyleLib.button)`
  width: 75%;
  float: left;
  cursor: pointer;
  `,

  favoriteButton: styled(StyleLib.button)`
  width: 15%;
  float: right;
  cursor: pointer;
  background-color: #9D9D9D;
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
  width: 600px;
  height: 130px;
  padding: 10px;
  vertical-align: top;
  `,

  facebook: styled(FaFacebook)`
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50%;
  display: inline-block;
  align-items: center;
  text-align: center;
  font-size: small;
  cursor: pointer;
  color: blue;
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `,

  twitter: styled(FaTwitter)`
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50%;
  display: inline-block;
  align-items: center;
  text-align: center;
  font-size: small;
  cursor: pointer;
  color: #87CEEB;
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `,

  pinterest: styled(FaPinterest)`
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50%;
  display: inline-block;
  align-items: center;
  text-align: center;
  font-size: small;
  cursor: pointer;
  color: red;
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `
}

export default DetailsLib;