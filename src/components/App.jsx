import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Search } from './Search/Search';
export class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <ToastContainer />
      </div>
    );
  }
}
