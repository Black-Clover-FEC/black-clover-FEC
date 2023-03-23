import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// TODO - this is the action button for ProductInformationCards

const ActionBtn = () => {

  const ActionButton = () => <FontAwesomeIcon icon={faStar} />;

  const FilledStar = styled(ActionButton)`
  color: #E7A66C;
  `

  return (
    <div>
      <FilledStar />
    </div>
  )
}

export default ActionBtn;