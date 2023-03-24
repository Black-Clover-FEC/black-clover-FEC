import React, {useState} from 'react';
import StyleLib from './Stylesheet.jsx';
import ReviewAndQuestionTile from './ReviewAndQuestionTile.jsx';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const UserPhotos = ({photos}) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState('');
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const expandImage = (url) => {
    setImage(url);
    openModal();
  }

  return (
    <>
    <ul>
      {photos.map(photo => <StyleLib.smallPhoto key={photo.id} src={photo.url} onClick={(e) => expandImage(photo.url)} />)}
    </ul>
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel='Please complete the form to review this product'
    image={image}
  ><StyleLib.bigPhoto src={image} /></Modal>
    </>
  );
}

export default UserPhotos;