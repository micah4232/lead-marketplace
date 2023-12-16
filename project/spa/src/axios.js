import axios from 'axios';
import Cookies from 'js-cookie'

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';
axios.defaults.headers.common['Content-Type'] ='application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = window.location.origin;
axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken')

export default axios