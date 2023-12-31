import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const DemoForm = () => {
    return (
        <Box className="max-w-xs mx-auto p-4 sm:p-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-900 rounded-xl shadow-2xl sm:max-w-lg">
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

            <div className="mb-2">
                    <Typography variant="caption" className="text-gray-300">
                        Genom att skicka in formuläret accepterar du Guardias dataskyddspolicy.
                    </Typography>
               
            </div>
         

            {/* Submit Button */}
            <Button fullWidth type="submit" color="success" variant="contained" className="mt-8 bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition duration-300 ease-in-out transform ">
                Boka demo
            </Button>
        </Box>
    );
};

export default DemoForm;
