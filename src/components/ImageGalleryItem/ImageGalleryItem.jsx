import { Wrap } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
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
    const { id, src, alt, img } = this.props;

    const { modal } = this.state;

    return (
      <Wrap key={id}>
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
