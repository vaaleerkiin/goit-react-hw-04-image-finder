import axios from 'axios';

export class Pixabay {
  constructor() {
    this.URL = 'https://pixabay.com/api/';
    this.page = 1;
    this.totalPage = 0;
    this.per_page = 12;
    this.URL_KEY = '34267443-bbee9b7fccdf3a768900f460b';
  }
  async getImages(ar) {
    const options = {
      params: {
        q: `${ar}`,
        key: this.URL_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    };

    const response = await axios.get(this.URL, options);
    this.totalPage = Math.ceil(response.data.totalHits / this.per_page);
    return response.data.hits;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  getPage() {
    return this.page;
  }

  getTotalPage() {
    return this.totalPage;
  }

  getPerPage() {
    return this.per_page;
  }
}
