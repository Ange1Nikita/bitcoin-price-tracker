export default function ({ $axios }, inject) {
    const apiClient = $axios.create({
      baseURL: 'http://localhost:3001/api', // Backend API
    });
  
    inject('api', apiClient);
  }