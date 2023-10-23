import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1/products';


export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    const first10Products = response.data.slice(0, 10); 
    return first10Products.map(product => product.title);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};
