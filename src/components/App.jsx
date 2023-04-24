import React, { PureComponent } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';

export class App extends PureComponent {
  state = { query: '' };

  handleSubmit = ({ query }) => {
    this.setState({ query: query.trim() });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery value={this.state.query} />
      </div>
    );
  }
}
