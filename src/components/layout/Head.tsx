import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import '../css/mystyle.css'; // Import your CSS file here
import { Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ListItem } from '@mui/material';
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { link: 'Home', to: '/' },
  { link: 'About', to: '/about' },
  { link: 'Portfolio', to: '/portfolio' },
  { link: 'Contact', to: '/contact' },
];

const Head: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        padding: 1, // Reduced padding for minimized height
        backgroundColor: '#f9f9f9',
        height: '100%', // Ensure full height
      }}
    >
      <Tooltip title="Full Stack Developer - React + Nodejs">
        <Typography variant="h6" sx={{ my: 0.5, color: '#333', fontWeight: 'bold' }}>
          Shegaw Getie
        </Typography>
      </Tooltip>
      <Divider />
      <List sx={{ padding: 0 }}>
        {navItems.map((link) => (
          <ListItem
            key={link.to}
            sx={{
              display: 'block',
              width: '100%',
              '&:not(:last-child)': {
                borderBottom: '1px solid #e0e0e0',
              },
            }}
          >
            <NavLink
              className={({ isActive }) => (isActive ? 'isActive' : 'inactive')}
              to={link.to}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '007BB8 ' : '#444',
                padding: '5px 10px', // Smaller padding for compact links
                display: 'block',
                borderRadius: '3px', // Slightly smaller border radius
                fontSize: '0.875rem', // Smaller font size
                transition: 'background-color 0.3s, color 0.3s', // Smooth transition for background and color
                backgroundColor: isActive ? '#e3f2fd' : 'transparent',
                '&:hover': {
                  backgroundColor: 'black', // Bright orange on hover
                  color: '#ffffff', // White text on hover
                },
              })}
            >
              {link.link}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#005D95' }}>
        <Box display='flex' p={0.5}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <Tooltip title="Full Stack Developer - React + Nodejs" placement="bottom">
  <IconButton
    sx={{
      background: '#fff',
      borderRadius: '50%',
      padding: '8px', // Adjust padding for size
      '&:hover': {
        background: '#f0f0f0', // Optional: Change background on hover
      },
    }}
  >
    <InfoOutlinedIcon sx={{ color: '#000' }} /> {/* Adjust the icon color as needed */}
  </IconButton>
</Tooltip>

    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '8px' }}>
      Shegaw Getie
    </Typography>
  </Box>

  <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
    {navItems.map((link) => (
      <NavLink 
        key={link.to} // Make sure to add a key prop
        className={({ isActive }) => (isActive ? 'isActive' : 'inactive')} 
        to={link.to}
        style={{ marginLeft: '16px' }} // Adjust spacing as needed
      >
        {link.link}
      </NavLink>
    ))}
  </Box>
</Box>


        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Head;
