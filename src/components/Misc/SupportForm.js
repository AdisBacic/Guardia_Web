import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const SupportForm = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [alertType, setAlertType] = useState('success'); // Can be 'success', 'info', 'warning', or 'error'
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/mwkgpjne', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setAlertMessage('Ditt meddelande har skickats. Vi kontaktar dig snart!');
                setAlertType('success');
                setOpenSnackbar(true);
                document.getElementById("name").value = "";
                document.getElementById("epost").value = "";
                document.getElementById("foretag").value = "";
                document.getElementById("telefonnummer").value = "";
                document.getElementById("meddelande").value = "";

            } else {
                setAlertMessage('Ett fel inträffade. Försök igen.');
                setAlertType('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            setAlertMessage('Ett fel inträffade. Försök igen.');
            setAlertType('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box className="max-w-xs mx-auto p-4 sm:p-8 bg-gradient-to-r from-gray-800 to-silver-900 text-white border border-gray-900 rounded-xl shadow-2xl sm:max-w-lg">
            <Typography variant="h5" component="h2" gutterBottom className="text-center mb-8 text-white font-semibold">
                Vad kan vi hjälpa dig med?
            </Typography>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <TextField InputProps={{style: {color: 'white', },}} InputLabelProps={{style: { color: 'white' },}}   fullWidth required id="name" name="name" label="Namn" placeholder="Fullständigt namn" variant="outlined" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                    <TextField InputProps={{style: {color: 'white', },}} InputLabelProps={{style: { color: 'white' },}}  fullWidth required id="epost" name="epost" label="Epost" placeholder="din.email@example.com" variant="outlined" type="email" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                    <TextField InputProps={{style: {color: 'white', },}} InputLabelProps={{style: { color: 'white' },}}   fullWidth required id="foretag" name="foretag" label="Företag" placeholder="Företagsnamn" variant="outlined" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                    <TextField InputProps={{style: {color: 'white', },}} InputLabelProps={{style: { color: 'white' },}}   fullWidth required id="telefonnummer" name="telefonnummer" label="Telefonnummer" placeholder="070 123 4567" variant="outlined" type="tel" autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                    <TextField InputProps={{style: {color: 'white', },}} InputLabelProps={{style: { color: 'white' },}}  fullWidth required id="meddelande" name="meddelande" label="Meddelande" placeholder="Ditt meddelande" variant="outlined" multiline rows={4} autoComplete="off" className="bg-gray-600 border-gray-600 focus:border-gray-400 rounded-md" />
                </div>

                <div className="mb-2">
                    <Typography variant="caption" className="text-gray-300">
                        Genom att skicka in formuläret accepterar du Guardias dataskyddspolicy.
                    </Typography>
                </div>
                <Button type="submit" fullWidth color="success" variant="contained" className="mt-8 bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition duration-300 ease-in-out transform ">
                    Skicka
                </Button>
            </form>
            <Snackbar open={openSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                autoHideDuration={5000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} variant="filled" severity={alertType} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SupportForm;