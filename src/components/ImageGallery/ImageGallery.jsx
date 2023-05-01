import React, { useState, useEffect } from 'react';
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
const fetchData = new Pixabay();
export const ImageGallery = ({ value }) => {
  const [images, setImages] = useState([]);
  const [status, setstatus] = useState('idle');
  const [page, setPage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (value !== '') {
      setPage(1);
      fetchData.resetPage();
      try {
        setstatus('pending');
        async function makeRequest() {
          const response = await fetchData.getImages(value);
          setImages(response);
          setstatus('resolved');
        }
        makeRequest();
      } catch (error) {
        setstatus('rejected');
        setError(error.message);
      }
    }
  }, [value]);

  useEffect(() => {
    if (value !== '' && fetchData.getPage() !== 1) {
      try {
        setstatus('pending');
        scrollBottom();
        async function makeRequest() {
          const response = await fetchData.getImages(value);
          setImages(prevState => [...prevState, ...response]);
          setstatus('resolved');
        }
        makeRequest();
      } catch (error) {
        setstatus('rejected');
        setError(error.message);
      }
    }
  }, [value, page]);

  const incrementPage = () => {
    fetchData.incrementPage();
    setPage(fetchData.getPage());
  };

  const handleLoadMore = () => {
    incrementPage();
  };

  return (
    <Wrap>
      <List>
        {images &&
          images.map(({ largeImageURL, tags, webformatURL }, idx) => {
            return (
              <ImageGalleryItem
                alt={tags}
                key={idx}
                src={webformatURL}
                img={largeImageURL}
              />
            );
          })}
        {status === 'pending' && <Plug num={fetchData.getPerPage()} />}
      </List>
      {status === 'resolved' &&
        fetchData.getPage() < fetchData.getTotalPage() && (
          <LoadMore type="button" onClick={handleLoadMore} variant="contained">
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
      <ArrowBtn onClick={BackToTop}>
        <ArrowTop />
      </ArrowBtn>
    </Wrap>
  );
};

ImageGallery.propTypes = { value: PropTypes.string.isRequired };

const BackToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const scrollBottom = () => {
  setTimeout(() => {
    window.scrollBy({
      top: 700,
      behavior: 'smooth',
    });
  }, 100);
};
