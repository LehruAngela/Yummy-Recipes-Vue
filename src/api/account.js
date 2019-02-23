import axios from 'axios'
import Vue from 'vue'
// import BASE_URL from '../baseUrl'

export const signup = (data) => {
  return axios.post(`https://yummy-recipes-api-v1.herokuapp.com/api-v1/auth/register`, data)
    .then((response) => {
      if (response.status === 201) {
        Vue.notify({ type:'success', text: response.data.message })
        localStorage.setItem('accessToken', response.data.access_token);
        // this.props.history.push('/categories');
        return true;
      }
    }).catch(error => {
      if (error.response) {
        Vue.notify({ type:'warn', text: error.response.data.message })
      } else if (error.request) {
        alert('Request not made');
      }
    });
}

export const signin = (data) => {
  return axios.post(`https://yummy-recipes-api-v1.herokuapp.com/api-v1/auth/login`, data)
    .then(response =>{
      if (response.status === 200) {
        Vue.notify({ type:'success', text: response.data.message })
        localStorage.setItem('accessToken', response.data.access_token);
        // this.props.history.push('/categories');
        return true;
      }
    }).catch(error => {
    if (error.response){
      Vue.notify({ type:'warn', text: error.response.data.message })
    } else if(error.request){
      alert('Request not made')
    }
  });
}