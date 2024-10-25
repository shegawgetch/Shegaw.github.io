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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSuitcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { link: 'Home', to: '/', icon: faHome },
  { link: 'About', to: '/about', icon: faUser },
  { link: 'Portfolio', to: '/portfolio', icon: faSuitcase },
  { link: 'Contact', to: '/contact', icon: faEnvelope },
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
        padding: 1,
        backgroundColor: '#f9f9f9',
        height: '100%',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
        <Box
          sx={{
            position: 'relative',
            width: '300px', // Adjusted width
            height: '200px', // Adjusted height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%', // Circular shape
            overflow: 'hidden',
            border: '4px solid #3f51b5', // Border for visibility
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Shadow for depth
            transition: 'transform 0.3s ease', // Transition for hover effect
          }}
        >
          <img
            src="assets/shegu.png" // Image path
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%', // Circular image
              objectFit: 'cover', // Maintain aspect ratio
              transition: 'transform 0.3s ease', // Transition for image
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            }}
          />
        </Box>
        <Typography sx={{ marginLeft: 1, color: '#3f51b5' }}>
          <strong>Full Stack Developer & Lecturer</strong>
        </Typography>
      </Box>
      <Tooltip title="Full Stack Developer - React + Nodejs">
        <Typography variant="h6" sx={{ my: 0, color: '#333', fontWeight: 'bold' }}>
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
              className={({ isActive }) => (isActive ? 'isActiveTogle' : 'togleNav')}
              to={link.to}
            >
              <FontAwesomeIcon icon={link.icon} style={{ marginRight: '8px' }} />
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
                    padding: '8px',
                    '&:hover': {
                      background: '#f0f0f0',
                    },
                  }}
                >
                  <InfoOutlinedIcon sx={{ color: '#000' }} />
                </IconButton>
              </Tooltip>
              <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '8px' }}>
                Shegaw Getie
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
              {navItems.map((link) => (
                <NavLink 
                  key={link.to}
                  className={({ isActive }) => ` ${isActive ? 'isActive' : 'nav'}`}
                  to={link.to}
                  style={{ marginLeft: '16px',borderRadius:'10px' }}
                >
                  <FontAwesomeIcon icon={link.icon} style={{ marginRight: '4px' }} />
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
            keepMounted: true,
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
