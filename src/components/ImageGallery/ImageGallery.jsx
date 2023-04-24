import React, { Component } from 'react';
import {
  Wrap,
  List,
  LoadMore,
  ArrowTop,
  ArrowBtn,
} from './ImageGallery.styled';
import { Plug } from '../Plug/Plug';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Pixabay } from '../../api/fetch';
import PropTypes from 'prop-types';
export class ImageGallery extends Component {
  state = { images: [], status: 'idle', page: null, error: '' };

  fetchData = new Pixabay();

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      try {
        this.fetchData.resetPage();
        const response = await this.fetchData.getImages(this.props.value);
        this.setState({
          images: response,
          page: 1,
        });

        this.setState({ status: 'resolved' });
      } catch (error) {
        this.setState({ status: 'rejected', error: error.message });
      }
    } else if (this.state.page > prevState.page && this.state.page !== 1) {
      this.setState({ status: 'pending' });
      try {
        const response = await this.fetchData.getImages(this.props.value);
        this.setState({ images: [...prevState.images, ...response] });

        this.setState({ status: 'resolved' });
      } catch (error) {
        this.setState({ status: 'rejected', error: error.message });
      }
    }
  };

  incrementPage = () => {
    this.fetchData.incrementPage();
    this.setState({ page: this.fetchData.getPage() });
  };

  handleLoadMore = () => {
    this.incrementPage();

    setTimeout(() => {
      window.scrollBy({
        top: 700,
        behavior: 'smooth',
      });
    }, 100);
  };

  BackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { status, images, error } = this.state;
    return (
      <Wrap>
        <List>
          {images &&
            images.map(({ id, largeImageURL, tags, webformatURL }) => {
              return (
                <ImageGalleryItem
                  alt={tags}
                  key={id}
                  src={webformatURL}
                  img={largeImageURL}
                />
              );
            })}
          {status === 'pending' && <Plug num={this.fetchData.getPerPage()} />}
        </List>
        {status === 'resolved' &&
          this.fetchData.getPage() < this.fetchData.getTotalPage() && (
            <LoadMore
              type="button"
              onClick={this.handleLoadMore}
              variant="contained"
            >
              Load more
            </LoadMore>
          )}
        {status === 'rejected' &&
          toast.error(error, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })}
        <ArrowBtn onClick={this.BackToTop}>
          <ArrowTop />
        </ArrowBtn>
      </Wrap>
    );
  }
}
ImageGallery.propTypes = { value: PropTypes.string.isRequired };
