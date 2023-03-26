import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const star = () => <FontAwesomeIcon icon={faStar} />;

const ActionStar = styled(star)`
color: #E7A66C;
`

export default ActionStar;