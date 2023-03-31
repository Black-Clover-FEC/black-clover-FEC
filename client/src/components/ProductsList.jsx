import React, { useState, useEffect } from 'react';
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
  const products = await api.listProducts({ count: 500 });
  return { products };
}

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <StyledDiv>
      <ul>
        {products.map(product => {
          let path = `/${product.id}`
          return (
            <StyleLib.routerLink key={product.id} to={path}>
              <StyleLib.linkTile >
                <StyleLib.h1>{product.name}</StyleLib.h1>
                <StyleLib.h5>{product.slogan}</StyleLib.h5>
                <StyleLib.p>{product.description}</StyleLib.p>
              </StyleLib.linkTile>
            </StyleLib.routerLink>
          )
        })}
      </ul>
    </StyledDiv>
  )
}

export default ProductsList;