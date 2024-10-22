import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

//const navItems = ['Home', 'About', 'Portfolio', 'Contact'];

const Footer: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', bottom: 0 }}>
      <CssBaseline />
      <AppBar component="footer" sx={{ backgroundColor: '#005D95', top: 'auto', bottom: 0 }}>
        <Divider sx={{ backgroundColor: '#fff' }} />
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant="body2" sx={{ color: '#fff' }}>
            © {new Date().getFullYear()} Shegaw Getie. All Rights Reserved.
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Footer;
