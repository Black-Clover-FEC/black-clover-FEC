import React, {useState, useEffect} from 'react';
import { Link, useLoaderData } from "react-router-dom";
import styled from 'styled-components';
import api from '../lib/api.js';
import StyleLib from '../assets/Stylesheet.jsx';

const StyledDiv = styled.div`
width: 80%;
max-width: 1500px;
margin: auto;
`

export async function productsLoader() {
  const products = await api.listProducts({count: 500});
  return { products };
}

const ProductsList = () => {
  const {products} = useLoaderData();

  return (
    <StyledDiv>
      <ul>
        {products.map(product => {
          let path = `/${product.id}`
          return (
          <StyleLib.tile key={product.id}>
            <Link to={path}>{product.name}</Link>
            <div>{product.slogan}</div>
            <div>{product.description}</div>
          </StyleLib.tile>
        )})}
      </ul>
    </StyledDiv>
  )
}

export default ProductsList;