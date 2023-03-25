import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';


// TODO - this is the action button for ProductInformationCards

// const ActionBtn = ({openComparison}) => {

//   return (
//     <input type='button' value='star'></input>
//   )
// }

// export default ActionBtn;

const star = ({openComparison}) => <FontAwesomeIcon icon={faStar} onClick={openComparison}/>;

const CompareBtn = styled(star)`
color: #E2C577;
position: abosolute;
top: 1%;
right: 1%;
`

export default CompareBtn;