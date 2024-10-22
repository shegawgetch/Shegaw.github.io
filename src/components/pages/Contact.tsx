import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '40px', padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" align="center" gutterBottom color="#3f51b5">
          Get in Touch
        </Typography>
      </motion.div>

      <Paper variant="outlined" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Typography variant="h6" gutterBottom color="#3f51b5">
            Contact Information
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Avatar>
                <MailOutlineIcon />
              </Avatar>
              <Typography variant="body1" marginLeft={2}>shegawgetch@gmail.com</Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Avatar>
                <PhoneIcon />
              </Avatar>
              <Typography variant="body1" marginLeft={2}>+251 936 329 744</Typography>
            </Box>
          </motion.div>

          <Divider style={{ margin: '20px 0' }} />

          <Typography variant="h6" gutterBottom color="#3f51b5">
            Connect with Me
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Avatar style={{ backgroundColor: '#333', color: '#fff' }}>
                <GitHubIcon />
              </Avatar>
              <Typography
                variant="body1"
                marginLeft={2}
                component="a"
                href="https://github.com/shegawgetch/Shegaw.github.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#3f51b5', textDecoration: 'underline' }}
              >
                GitHub Profile
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Avatar style={{ backgroundColor: '#0077b5', color: '#fff' }}>
                <LinkedInIcon />
              </Avatar>
              <Typography
                variant="body1"
                marginLeft={2}
                component="a"
                href="https://www.linkedin.com/in/shegaw-getie/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#3f51b5', textDecoration: 'underline' }}
              >
                LinkedIn Profile
              </Typography>
            </Box>
          </motion.div>

          <Divider style={{ margin: '20px 0' }} />

          <Box display="flex" justifyContent="center" marginTop={2}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.href = 'mailto:shegawgetch@gmail.com'}
                style={{ borderRadius: 20, padding: '10px 20px' }}
              >
                Send Message
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Paper>
    </Container>
  );
};

export default Contact;
