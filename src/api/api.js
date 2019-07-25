import * as axios from 'axios'

const instance = axios.create({
   baseURL: `https://avito.dump.academy/`
});

export const productsAPI = {
  getProducts(){
      return instance.get(`products`)
          .then(response => {
              return response.data
          })
  },
  getSellers() {
      return instance.get(`sellers`)
          .then(response => {
              return response.data
          })
  }
};