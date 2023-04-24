import { Wrap } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = { modal: false };

  toogleModal = () => {
    this.setState(prevState => {
      return { modal: !prevState.modal };
    });
  };
  onKeyDown = e => {
    console.log(e);
  };

  render() {
    const { src, alt, img } = this.props;

    const { modal } = this.state;

    return (
      <Wrap>
        <img src={src} alt={alt} onClick={this.toogleModal} />
        {modal && (
          <Modal
            open={true}
            onClick={this.toogleModal}
            img={img}
            tags={alt}
            onKey={this.onKeyDown}
            onKeyDown={() => {
              console.log('hi');
            }}
          />
        )}
      </Wrap>
    );
  }
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
