import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const DemoForm = () => {
    return (
        <Box className="max-w-lg mx-auto p-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-900 rounded-xl shadow-2xl">
            <Typography variant="h5" component="h2" gutterBottom className="text-center mb-8 text-white font-semibold">
                Boka ett personligt demo
            </Typography>
            {/* Input fields */}
            <div className="space-y-6">
                <TextField InputProps={{ className: 'text-white' }} fullWidth required id="name" name="name" label="Namn" placeholder="Fullständigt namn" variant="outlined" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                <TextField InputProps={{ className: 'text-white' }} fullWidth required id="epost" name="epost" label="Epost" placeholder="din.email@example.com" variant="outlined" type="email" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                <TextField InputProps={{ className: 'text-white' }} fullWidth required id="foretag" name="foretag" label="Företag" placeholder="Företagsnamn" variant="outlined" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                <TextField InputProps={{ className: 'text-white' }} fullWidth required id="telefonnummer" name="telefonnummer" label="Telefonnummer" placeholder="070 123 4567" variant="outlined" type="tel" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                <TextField InputProps={{ className: 'text-white' }} fullWidth required id="meddelande" name="meddelande" label="Meddelande" placeholder="Ditt meddelande" variant="outlined" multiline rows={4} autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
            </div>

            {/* Integrity Checkbox */}
            <FormControlLabel control={<Checkbox required name="integrity" color="primary" />} label="Jag accepterar integritetspolicyn" className="text-gray-300 mt-8" />

            {/* Submit Button */}
            <Button fullWidth type="submit" color="success" variant="contained" className="mt-8 bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition duration-300 ease-in-out transform ">
                Boka demo
            </Button>
        </Box>
    );
};

export default DemoForm;
