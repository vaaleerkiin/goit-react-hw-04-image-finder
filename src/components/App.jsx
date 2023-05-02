import React, { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const handleSubmit = ({ query }) => setQuery(query.trim());

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery value={query} />
    </div>
  );
};
