import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';
axios.defaults.headers.common['Content-Type'] ='application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = window.location.origin;

export default axios