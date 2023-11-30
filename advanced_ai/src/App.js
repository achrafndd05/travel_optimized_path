// src/App.js

import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import image from './images/image.jpeg';
import Button from '@mui/material/Button';

const App = () => {
  // Define the list of Algerian states
  const algerianStates = 
  ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Bechar", "Blida", "Bouira", "Tamanrasset", "Tbessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Setif", "Saeda", "Skikda", "Sidi Bel Abbes", "Annaba", "Guelma", "Constantine", "Medea", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdes", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Ain Defla", "Naama", "Ain Temouchent", "Ghardaefa", "Relizane", "El M'ghair", "El Menia", "Ouled Djellal", "Bordj Baji Mokhtar", "Béni Abbès", "Timimoun", "Touggourt", "Djanet", "In Salah", "In Guezzam"]


  // State to manage the selected states from the dropdown
  const [selectedStates, setSelectedStates] = useState([]);

  // Event handler for dropdown change
  const handleStateChange = (event) => {
    setSelectedStates(event.target.value);
  };

  return (
    <div>
    <div>
    <h1 style={{textAlign: "center",color:"#1976d2"}}>Select your path</h1>

    </div>

    <Box display="flex">
      <Box p={3} width="50%">
        <h1>Algerian States</h1>
        <FormControl fullWidth>
          <InputLabel id="multi-select-label">Select states</InputLabel>
          <Select
            labelId="multi-select-label"
            id="multi-select"
            multiple
            value={selectedStates}
            onChange={handleStateChange}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((item) => (
                  <Chip key={item} label={item} style={{ margin: 2 }} />
                ))}
              </div>
            )}
          >
            {algerianStates.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box p={3} width="50%">
        <div>
          <h2>You selected: {selectedStates.length > 0 ? selectedStates.join(', ') : 'None'}</h2>
          {/* Display your image or content on the right */}
          <img src={image} alt="Selected States" style={{ maxWidth: '100%' }} />
        </div>
      </Box>
    </Box>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" size="large">
              Optimize
            </Button>
          </div>

    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>List of Optimized Path</h3>
        <h2>You selected: {selectedStates.length > 0 ? selectedStates.join(', ') : 'None'}</h2>
        {/* Add your optimized paths content here */}
      </div>
    </div>
  );
};

export default App;





