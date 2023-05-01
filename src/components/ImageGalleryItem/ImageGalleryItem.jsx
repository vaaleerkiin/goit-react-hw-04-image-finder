import { useState } from 'react';
import { Wrap } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ alt, src, img }) => {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(prevState => !prevState);
  };
  const onKeyDown = e => {
    console.log(e);
  };

  return (
    <Wrap>
      <img src={src} alt={alt} onClick={toogleModal} />
      {modal && (
        <Modal
          open={true}
          onClick={toogleModal}
          img={img}
          tags={alt}
          onKey={onKeyDown}
          onKeyDown={() => {
            console.log('hi');
          }}
        />
      )}
    </Wrap>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
