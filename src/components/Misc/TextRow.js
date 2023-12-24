import React from 'react';
import { Grid, Typography } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DevicesIcon from '@mui/icons-material/Devices';

const TextRow = () => {
  return (
    <Grid
      container
      spacing={2}
      className="p-4 mx-auto text-gray-900 dark:text-white sm:p-8 lg:px-12" // Adjusted the horizontal padding
    >
      <Grid item xs={12} sm={6} md={4} lg={3}> {/* Adjusted column widths */}
        <div className="flex items-center justify-center"> {/* Centering contents */}
          <EmojiObjectsIcon sx={{ fontSize: 40, color: 'primary' }} />
          <Typography variant="h4" component="dt" className="mb-2 font-extrabold text-center"> {/* Centering text */}
            0kr
          </Typography>
        </div>
        <Typography variant="body2" component="dd" className="text-gray-500 dark:text-gray-400 text-center"> {/* Centering text */}
          Startavgift
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="flex items-center justify-center">
          <TrendingUpIcon sx={{ fontSize: 40, color: 'primary' }} />
          <Typography variant="h4" component="dt" className="mb-2 font-extrabold text-center">
            Modern
          </Typography>
        </div>
        <Typography variant="body2" component="dd" className="text-gray-500 dark:text-gray-400 text-center">
          React Electron
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="flex items-center justify-center">
          <HowToRegIcon sx={{ fontSize: 40, color: 'primary' }} />
          <Typography variant="h4" component="dt" className="mb-2 font-extrabold text-center">
            GDPR
          </Typography>
        </div>
        <Typography variant="body2" component="dd" className="text-gray-500 dark:text-gray-400 text-center">
          Byggd för experter
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="flex items-center justify-center">
          <DevicesIcon sx={{ fontSize: 40, color: 'primary' }} />
          <Typography variant="h4" component="dt" className="mb-2 font-extrabold text-center">
            Multi-Plattform
          </Typography>
        </div>
        <Typography variant="body2" component="dd" className="text-gray-500 dark:text-gray-400 text-center">
          Operativfri
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextRow;
