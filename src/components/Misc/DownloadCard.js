import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import Grow from '@mui/material/Grow';
import DownloadHeroSection from './DownloadHeroSection';

const DownloadCard = () => {
    const [downloadUrls, setDownloadUrls] = useState({
        macIntel: '',
        windows: '',
        macARM64: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.github.com/repos/Eftiand/Guardia-Release/releases/latest')
            .then(response => response.json())
            .then(data => {
                const assets = data.assets;
                let urls = {};
                assets.forEach(asset => {
                    if (asset.name === "Guardia-1.0.8-arm64-mac.zip" || asset.name === "Guardia-1.0.8-arm64.dmg") {
                        urls.macARM64 = asset.browser_download_url;
                    } else if (asset.name === "Guardia-Setup-1.0.8.exe") {
                        urls.windows = asset.browser_download_url;
                    } else if (asset.name === "Guardia-1.0.8-mac.zip") {
                        urls.macIntel = asset.browser_download_url;
                    }
                });
                setDownloadUrls(urls);
            })
            .catch(err => {
                console.error('Error fetching the latest release:', err);
                setError(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const handleDownload = (platform) => {
        if (downloadUrls[platform]) {
            window.open(downloadUrls[platform], '_blank');
        } else {
            console.log(`Download URL for ${platform} not found`);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading download link.</p>;



    return (
      <div className="bg-gray-100 flex items-center justify-center mt-16 md:mt-24 lg:mt-30">
        <div className="cursor-default flex flex-col items-center border border-gray-700 bg-gray-800 w-full px-4 md:px-0">
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
            <div><DownloadHeroSection /></div>
            </Grow>       

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-4 mb-48">
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AppleIcon />}
              onClick={() => handleDownload('macIntel')}
            >
              Download for Mac (Intel)
            </Button>
            </Grow>  
                

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>

            <Button
              variant="contained"
              color="primary"
              startIcon={<LaptopWindowsIcon />}
              onClick={() => handleDownload('windows')}
            >
              Download for Windows
            </Button>
            </Grow>  

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<AppleIcon />}
              onClick={() => handleDownload('macARM64')}
            >
              Download for Mac (ARM64)
            </Button>
            </Grow>  

          </div>
        </div>
      </div>
  );
}
export default DownloadCard;  