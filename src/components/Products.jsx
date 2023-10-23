import { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { getProducts } from '../api';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks({ onShowProductDetail }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productTitles = await getProducts();
        setProducts(productTitles);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleChange = (event) => {
    setSelectedProducts(event.target.value);
  };

  const handleSave = () => {
    onShowProductDetail(selectedProducts);
  };

  return (
    <div>
      <h2>Productos</h2>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Productos</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedProducts}
          onChange={handleChange}
          input={<OutlinedInput label="Productos" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {products.map((product) => (
            <MenuItem key={product} value={product}>
              <Checkbox checked={selectedProducts.indexOf(product) > -1} />
              <ListItemText primary={product} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Guardar
      </Button>
    </div>
  );
}

