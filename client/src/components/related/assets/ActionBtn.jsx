import React from 'react';
// import {faStar} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import styled from 'styled-components';
import ActionStar from './star.jsx';

// TODO - this is the action button for ProductInformationCards

const ActionBtn = ({openComparison}) => {

  return (
    <div>
      <ActionStar onclick={openComparison}/>
    </div>
  )
}

export default ActionBtn;