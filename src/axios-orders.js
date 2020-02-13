import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-maker-92328.firebaseio.com/'
});

export default instance;
